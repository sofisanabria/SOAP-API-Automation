import 'dotenv/config'
import * as AxiosLogger from 'axios-logger'
import axios from 'axios'
import { CountryClient, createClientAsync } from '../generated/country'
import { Server, listen } from 'soap'
import http from 'http'
import { readFileSync } from 'fs'

export class ApiClient {
    private static classInstance?: ApiClient
    private static appInstance: http.Server<
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
        if (!this.appInstance) {
            const server = http.createServer(function (request, response) {
                response.end('404: Not Found: ' + request.url)
            })

            const port = 8002
            server.listen(port)
            this.appInstance = server
        }

        return this.appInstance
    }

    public static async getClient(url?: string) {
        const axiosInstance = axios.create({})
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
        })
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
