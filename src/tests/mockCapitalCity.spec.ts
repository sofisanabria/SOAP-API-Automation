import { expect } from 'chai'
import { ApiClient } from '../client/ApiClientBase'
import { CountryClient, CountryIsoCode } from '../generated/country'
import { customCapitalCityService } from '../mocks/customCapitalCityService'
import { ExtendedClient } from '../client/utils'

describe('Capital City Tests', () => {
    let client: ExtendedClient<CountryClient>
    let mockClient: ExtendedClient<CountryClient>

    before(async function () {
        await ApiClient.createService(
            './resources/country.wsdl',
            '/Mock',
            customCapitalCityService,
        )
        mockClient = await ApiClient.getClient<CountryClient>(
            {
                url: '/Mock',
                mock: true,
            },
            { contextToReport: this },
        )
        client = await ApiClient.getClient<CountryClient>(
            {
                url: './resources/country.wsdl',
            },
            { contextToReport: this },
        )
    })

    after(() => {
        ApiClient.closeServer()
    })

    it('Should work -@ Mock', async function () {
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

    it('Should trigger a soap fault -@ Mock', async () => {
        const input: CountryIsoCode = {
            sCountryISOCode: 'US',
        }

        const htmlHeaders = {
            'Content-Topo': 'topo',
        }

        const soapHeaders: CountryIsoCode = {
            hola: 'US',
        }

        const operationResult = await mockClient.CapitalCityAsync(
            input,
            {
                extraHeaders: htmlHeaders,
            },
            soapHeaders,
        )

        const soapError = operationResult.err
        expect(soapError.response?.status).to.equal(500)
        const fault = soapError.root?.Envelope.Body.Fault
        expect(fault.Code.Value).to.equal('soap:Sender')
        expect(fault.Reason.Text).to.equal('Processing Error')
        expect(fault.Code.Subcode.value).to.equal('rpc:City')

        mockClient.addSoapHeader({ sampleSharedHeader: 'lol' })
        await mockClient.CapitalCityAsync(
            input,
            {
                extraHeaders: htmlHeaders,
            },
            {
                hello: 'adios',
                anotherProperty: {
                    $xml: '<headerCustom>withoutJson</headerCustom>',
                },
            },
        )
    })
})
