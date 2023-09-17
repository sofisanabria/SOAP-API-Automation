import 'dotenv/config'
import * as AxiosLogger from 'axios-logger'
import { ExampleClient, createClientAsync } from '../generated/example'
import axios from 'axios'

export class ApiClient {
    private static classInstance?: ApiClient
    private client?: ExampleClient

    public static getInstance() {
        if (!this.classInstance) {
            this.classInstance = new ApiClient()
        }

        return this.classInstance
    }

    public static async getClient() {
        const instance = this.getInstance()
        if (!instance.client) {
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
                axiosInstance.interceptors.request.use(
                    AxiosLogger.requestLogger,
                )
                axiosInstance.interceptors.response.use(
                    AxiosLogger.responseLogger,
                )
            }

            instance.client = await createClientAsync(
                process.env.WSDL_PATH ?? '',
                { returnFault: true, request: axiosInstance },
            )
        }

        return instance.client
    }
}
