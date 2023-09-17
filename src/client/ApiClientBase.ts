import 'dotenv/config'
import * as AxiosLogger from 'axios-logger'
import { ExampleWsdlClient, createClientAsync } from '../generated/examplewsdl'

export class ApiClient {
    private static classInstance?: ApiClient
    private client?: ExampleWsdlClient

    public static getInstance() {
        if (!this.classInstance) {
            this.classInstance = new ApiClient()
        }

        return this.classInstance
    }

    public static async getClient() {
        const instance = this.getInstance()
        if (!instance.client) {
            instance.client = await createClientAsync(
                process.env.WSDL_PATH ?? '',
            )
            const axios = instance.client.wsdl.options.request
            if (axios) {
                axios.defaults.validateStatus = () => false
                axios.interceptors.request.use(AxiosLogger.requestLogger)
                console.log('AAA')
            }
        }

        return instance.client
    }
}
