import 'dotenv/config'
import * as AxiosLogger from 'axios-logger'
import axios from 'axios'
import { Server, createClientAsync, listen } from 'soap'
import http from 'http'
import { readFileSync } from 'fs'

export class ApiClient {
    private static classInstance?: ApiClient
    private static appInstance: http.Server<
        typeof http.IncomingMessage,
        typeof http.ServerResponse
    >
    private static serverInstance: http.Server<
    typeof http.IncomingMessage,
    typeof http.ServerResponse
>

    private constructor() {}

    public static getInstance() {
        if (!this.classInstance) {
            this.classInstance = new ApiClient()
        }

        return this.classInstance
    }

    private static createServer() {
        const port = 8002
        if (!this.appInstance) {
            const server = http.createServer(function (request, response) {
                response.end('404: Not Found: ' + request.url)
            })

            this.appInstance = server
            this.serverInstance = this.appInstance.listen(port)
        }

        return this.serverInstance
    }

    public static async getClient<T>(url?: string) {
        const axiosInstance = axios.create({})
        axiosInstance.defaults.timeout = 60000
        const isProxyEnabled = process.env.PROXY_ENABLED === 'true'
        if (isProxyEnabled) {
            axiosInstance.defaults.proxy = {
                host: process.env.PROXY_HOST || 'localhost',
                port: parseInt(process.env.PROXY_PORT || '8080'),
            }
        }

        const isLoggingEnabled = process.env.LOGGING_ENABLED === 'true'
        if (isLoggingEnabled) {
            axiosInstance.interceptors.request.use(AxiosLogger.requestLogger)
            axiosInstance.interceptors.response.use(AxiosLogger.responseLogger)
        }

        const path = url ?? process.env.WSDL_PATH

        return await createClientAsync(path ?? '', {
            returnFault: true,
            request: axiosInstance,
        }) as T;
    }

    public static async getServer(customService: any, soapServiceUrl: string) {
        const app = ApiClient.createServer()
        const xml = readFileSync(process.env.WSDL_PATH ?? '', 'utf8')

        return listen(app, soapServiceUrl, customService, xml)
    }
}

export interface SoapError {
    root?: {
        Envelope: {
            Body: {
                Fault: {
                    faultcode: string
                    faultstring: string
                    detail: string
                }
            }
        }
    }
    response?: {
        status: number
        statusText: string
        headers: any
        config: any
        data: any
        [key: string]: any
    }
    [key: string]: any
}
