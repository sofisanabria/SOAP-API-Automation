import {
    AxiosError,
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
} from 'axios'
import addContext from 'mochawesome/addContext'
import { Client } from 'soap4test'

export type ExtendedClient<T extends Client> = T & {
    axiosClient: AxiosInstance
    interceptors?: Interceptors
    updateContext: (context: Mocha.Context) => void
}

export interface Interceptors {
    requestId: number
    responseId: number
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

export function addToReport(
    axiosInstance: AxiosInstance,
    context: any,
    previousInterceptors?: any,
): any {
    if (previousInterceptors) {
        axiosInstance.interceptors.request.eject(previousInterceptors.requestId)
        axiosInstance.interceptors.response.eject(
            previousInterceptors.responseId,
        )
    }
    const requestId = axiosInstance.interceptors.request.use(
        (request: AxiosRequestConfig) => {
            const logRequest: any = {
                url: request.url,
                headers: request.headers,
                data: request.data,
            }
            addContext(context, {
                title: `Request ${request.method}`,
                value: logRequest,
            })
            return request
        },
        (error: AxiosError) => {
            const logRequest: any = {
                code: error.code,
                name: error.name,
                message: error.message,
            }
            addContext(context, {
                title: `Request Error ${error.name}`,
                value: logRequest,
            })
            return error
        },
    )
    const responseId = axiosInstance.interceptors.response.use(
        (response: AxiosResponse) => {
            const logResponse: any = {
                status: response.status,
                url: response.config.url,
                headers: response.headers,
                data: response.data,
            }
            addContext(context, {
                title: `Response ${response.status}`,
                value: logResponse,
            })
            return response
        },
        (error: AxiosError) => {
            const logResponse: any = {
                code: error.code,
                name: error.name,
                message: error.message,
            }
            addContext(context, {
                title: `Response Error ${error.name}`,
                value: logResponse,
            })
            return error
        },
    )
    return { requestId, responseId }
}
