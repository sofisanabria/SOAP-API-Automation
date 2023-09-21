import 'dotenv/config'
import * as AxiosLogger from 'axios-logger'
import axios, { AxiosInstance } from 'axios'
import { Client, createClientAsync, listen } from 'soap4test'
import http, { Server } from 'http'
import { readFileSync } from 'fs'
import { ExtendedClient, addToReport } from './utils'
import { modifyWsdl } from './wsdlUtils'

export class ApiClient {
    private static classInstance?: ApiClient
    private server?: Server
    private registeredServices: string[] = []

    private constructor() {}

    public static getInstance() {
        if (!this.classInstance) {
            this.classInstance = new ApiClient()
        }

        return this.classInstance
    }

    private static createServer(port?: number) {
        const currentInstance = this.getInstance()
        if (!currentInstance.server) {
            const server = http.createServer(function (request, response) {
                response.end('404: Not Found: ' + request.url)
            })
            const listener = server.listen(port ?? 0)
            currentInstance.server = listener
        }
        return currentInstance.server
    }

    private static getServerPort() {
        const currentInstance = this.getInstance()
        if (currentInstance.server) {
            return (
                currentInstance.server.address() as {
                    address: string
                    family: string
                    port: number
                }
            ).port
        }
        return 0
    }

    public static closeServer() {
        const currentInstance = this.getInstance()
        if (currentInstance.server) {
            currentInstance.server.close()
            currentInstance.server = undefined
            this.getInstance().registeredServices = []
        }
    }

    public static async getClient<T extends Client>(
        server: {
            url: string
            mock?: boolean
        },
        axiosConfig: {
            axiosClient?: AxiosInstance
            contextToReport?: any
        } = {},
    ): Promise<ExtendedClient<T>> {
        const axiosInstance =
            axiosConfig.axiosClient ?? axios.create({ timeout: 60000 })
        const isProxyEnabled = process.env.PROXY_ENABLED === 'true'
        if (isProxyEnabled) {
            axiosInstance.defaults.proxy = {
                host: process.env.PROXY_HOST || 'localhost',
                port: parseInt(process.env.PROXY_PORT || '8080'),
            }
        }

        const isLoggingEnabled = process.env.LOGGING_ENABLED === 'true'
        if (isLoggingEnabled) {
            axiosInstance.interceptors.request.use(
                AxiosLogger.requestLogger,
                AxiosLogger.errorLogger,
            )
            axiosInstance.interceptors.response.use(
                AxiosLogger.responseLogger,
                AxiosLogger.errorLogger,
            )
        }

        let path = server.url
        if (
            server.mock &&
            !path.includes('http://') &&
            !path.includes('https://')
        ) {
            path = `http://localhost:${this.getServerPort()}${server.url}?wsdl`
        }
        const newClient = (await createClientAsync(path, {
            returnFault: true,
            request: axiosInstance,
            parseResponseAttachments: false,
        })) as ExtendedClient<T>

        newClient.axiosClient = axiosInstance
        newClient.updateContext = (context: Mocha.Context) => {
            newClient.interceptors = addToReport(
                axiosInstance,
                context,
                newClient.interceptors,
            )
        }

        if (axiosConfig.contextToReport) {
            newClient.updateContext(axiosConfig.contextToReport)
        }

        return newClient
    }

    public static async createService(
        wsdl: string,
        soapServiceUrl: string,
        customService: any,
        port?: number,
    ) {
        const app = ApiClient.createServer(port)
        const wsdlXml = readFileSync(wsdl, 'utf8')
        const newWsdl = await modifyWsdl(
            wsdlXml,
            `http://localhost:${this.getServerPort()}${soapServiceUrl}`,
        )
        if (this.getInstance().registeredServices.includes(soapServiceUrl)) {
            throw new Error(
                `The service ${soapServiceUrl} is already registered`,
            )
        }
        this.getInstance().registeredServices.push(soapServiceUrl)
        return listen(app, soapServiceUrl, customService, newWsdl)
    }
}
