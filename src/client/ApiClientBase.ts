import 'dotenv/config'
import * as AxiosLogger from 'axios-logger'
import axios from 'axios'
import { createClientAsync, listen } from 'soap'
import http from 'http'
import { readFileSync } from 'fs'
import { Builder, parseStringPromise } from 'xml2js'

export class ApiClient {
    private static classInstance?: ApiClient
    private static appInstance: http.Server<
        typeof http.IncomingMessage,
        typeof http.ServerResponse
    >
    private port = 0

    private constructor() {}

    public static getInstance() {
        if (!this.classInstance) {
            this.classInstance = new ApiClient()
        }

        return this.classInstance
    }

    private static createServer(port?: number) {
        if (!this.appInstance) {
            const server = http.createServer(function (request, response) {
                response.end('404: Not Found: ' + request.url)
            })

            this.appInstance = server
        }

        return this.appInstance.listen(port ?? this.getInstance().port)
    }

    public static closeServer() {
        if (this.appInstance) {
            this.appInstance.close()
        }
    }

    public static async getClient<T>(server: {
        url: string
        port?: number
        mock?: boolean
    }): Promise<T> {
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

        let path = server.url
        if (
            server.mock &&
            !path.includes('http://') &&
            !path.includes('https://')
        ) {
            path = `http://localhost:${server.port ?? 8080}${server.url}`
        }
        return (await createClientAsync(path, {
            returnFault: true,
            request: axiosInstance,
            parseReponseAttachments: true,
        })) as T
    }

    private static async modifyWsdl(wsdlXml: string, customServiceUrl: string) {
        const result = await parseStringPromise(wsdlXml)

        // Modify the service port location
        const service: any = result.definitions.service
        for (const serviceEntry of Object.entries(service)) {
            for (const portEntry of Object.entries(
                (serviceEntry[1] as any).port,
            )) {
                const value = portEntry[1] as any
                if (value['soap:address']) {
                    value['soap:address'][0].$.location = customServiceUrl
                } else if (value['soap12:address']) {
                    value['soap12:address'][0].$.location = customServiceUrl
                }
            }
        }

        // Convert the modified XML back to a string
        const builder = new Builder()
        return builder.buildObject(result)
    }

    public static async getService(
        wsdl: string,
        soapServiceUrl: string,
        customService: any,
        port?: number,
    ) {
        const app = ApiClient.createServer(port)
        const finalPort = (
            app.address() as {
                address: string
                family: string
                port: number
            }
        ).port
        const wsdlXml = readFileSync(wsdl, 'utf8')
        const newWsdl = await this.modifyWsdl(
            wsdlXml,
            `http://localhost:${finalPort}${soapServiceUrl}`,
        )
        return {
            server: listen(app, soapServiceUrl, customService, newWsdl),
            port: finalPort,
        }
    }
}

export interface SoapError {
    root?: {
        Envelope: {
            Body: {
                Fault: any
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
