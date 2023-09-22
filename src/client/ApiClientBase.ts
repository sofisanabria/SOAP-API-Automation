import 'dotenv/config'
import * as AxiosLogger from 'axios-logger'
import axios, { AxiosInstance } from 'axios'
import { Client, createClientAsync, listen } from 'soap4test'
import http, { Server } from 'http'
import { readFileSync } from 'fs'
import { ExtendedClient, addToReport } from './utils'
import { modifyWsdl } from './wsdlUtils'

/**
 * The ApiClient class provides methods for creating and managing SOAP services and clients.
 */
export class ApiClient {
    /**
     * The singleton instance of the ApiClient class.
     */
    private static classInstance?: ApiClient

    /**
     * The HTTP server used to host SOAP services.
     */
    private server?: Server

    /**
     * An array of registered SOAP services.
     */
    private registeredServices: string[] = []

    /**
     * Creates a new instance of the ApiClient class.
     * @private
     */
    private constructor() {}

    /**
     * Returns the singleton instance of the ApiClient class.
     * If an instance does not exist, a new one is created.
     * @returns The singleton instance of the ApiClient class.
     */
    public static getInstance() {
        if (!this.classInstance) {
            this.classInstance = new ApiClient()
        }

        return this.classInstance
    }

    /**
     * Creates an HTTP server to host SOAP services.
     * If a server does not exist, a new one is created.
     * @param port - The port number to use for the server (optional).
     * @returns The HTTP server used to host SOAP services.
     */
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

    /**
     * Returns the port number of the HTTP server used to host SOAP services.
     * @returns The port number of the HTTP server used to host SOAP services.
     */
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

    /**
     * Closes the HTTP server used to host SOAP services and clears the list of registered services.
     */
    public static closeServer() {
        const currentInstance = this.getInstance()
        if (currentInstance.server) {
            currentInstance.server.close()
            currentInstance.server = undefined
            this.getInstance().registeredServices = []
        }
    }

    /**
     * Creates a new SOAP client for the specified service.
     * @param server - The URL of the SOAP service and an optional flag to indicate if the service is a mock (default is false).
     * @param axiosConfig - Optional configuration for the Axios HTTP client used by the SOAP client.
     * @returns A Promise that resolves to the SOAP client.
     */
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

    /**
     * Creates a new SOAP service using the specified WSDL and custom service implementation.
     * @param wsdl - The URL or local file path of the WSDL file.
     * @param soapServiceUrl - The URL of the SOAP service.
     * @param customService - The custom service implementation.
     * @param port - The port number to use for the server (optional).
     * @returns A Promise that resolves to the SOAP service.
     * @throws An error if there is an issue downloading or reading the WSDL file, or if the service is already registered.
     */
    public static async createService(
        wsdl: string,
        soapServiceUrl: string,
        customService: any,
        port?: number,
    ) {
        const app = ApiClient.createServer(port)
        let wsdlXml: string

        if (/^https?:\/\//i.test(wsdl)) {
            try {
                const response = await axios.get(wsdl)
                wsdlXml = response.data
            } catch (err) {
                throw new Error(`Error downloading WSDL from "${wsdl}": ${err}`)
            }
        } else {
            try {
                wsdlXml = readFileSync(wsdl, 'utf8')
            } catch (err) {
                throw new Error(
                    `Error reading local WSDL file "${wsdl}": ${err}`,
                )
            }
        }

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
