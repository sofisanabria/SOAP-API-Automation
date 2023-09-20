import { expect } from 'chai'
import { ApiClient, SoapError } from '../client/ApiClientBase'
import { CountryClient, CountryIsoCode } from '../generated/country'
import { customCapitalCityService } from './mocks/customCapitalCityService'

describe('Country Name Tests', () => {
    let client: CountryClient
    let mockClient: CountryClient

    before(async () => {
        const server = await ApiClient.getService(
            './resources/country.wsdl',
            '/Mock',
            customCapitalCityService,
        )
        mockClient = await ApiClient.getClient<CountryClient>({
            url: '/Mock?wsdl',
            port: server.port,
            mock: true,
        })
        client = await ApiClient.getClient<CountryClient>({
            url: './resources/country.wsdl',
        })
    })

    after(() => {
        ApiClient.closeServer()
    })

    it('Should work', async () => {
        const input: CountryIsoCode = {
            sCountryISOCode: 'UA',
        }

        const originalOperation = await client.CapitalCityAsync(input)

        const mockOperation = await mockClient.CapitalCityAsync(input)

        expect(originalOperation.result.CapitalCityResult).to.equal('Kiev')
        expect(mockOperation.result.CapitalCityResult).to.equal(
            'UA Capital City',
        )
    })

    it('Should trigger a soap fault', async () => {
        const input: CountryIsoCode = {
            sCountryISOCode: 'US',
        }

        const operationResult = await mockClient.CapitalCityAsync(input)

        const soapError = operationResult.err
        expect(soapError.response?.status).to.equal(500)
        const fault = soapError.root?.Envelope.Body.Fault
        expect(fault.Code.Value).to.equal('soap:Sender')
        expect(fault.Reason.Text).to.equal('Processing Error')
        expect(fault.Code.Subcode.value).to.equal('rpc:City')
    })
})
