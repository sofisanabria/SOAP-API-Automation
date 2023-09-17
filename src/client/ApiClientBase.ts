import 'dotenv/config'
import * as AxiosLogger from 'axios-logger'
import axios from 'axios'
import { CountryClient, createClientAsync } from '../generated/country'
import express from 'express'
import { Server, listen } from 'soap'
import { readFile } from 'fs/promises'
import { readFileSync } from 'fs'

export class ApiClient {
    private static classInstance?: ApiClient

    public static getInstance() {
        if (!this.classInstance) {
            this.classInstance = new ApiClient()
        }

        return this.classInstance
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

    public static async getServer(customService: any) {
        const app = express()
        const serverPromise = new Promise((resolve, _reject) => {
            const server = app.listen(8001, function () {
                resolve(server)
            })
        })

        const server = await serverPromise

        const xml = readFileSync(process.env.WSDL_PATH ?? '', 'utf8')

        return listen(app, '/wsdl', customService, xml, () => {
            console.log('server initialized')
        })
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
