import { expect } from 'chai'
import { ApiClient } from '../client/ApiClientBase'
import {
    CountryClient,
    CountryIsoCode,
    CountryName,
} from '../generated/country'
import { customCountryNameService } from '../mocks/customCountryService'

describe('Country Name Tests', () => {
    let client: CountryClient

    before(async () => {
        client = await ApiClient.getClient<CountryClient>({
            url: './resources/country.wsdl',
        })
    })

    after(() => {
        ApiClient.closeServer()
    })

    it('should correctly get the country name -@ Smoke', async () => {
        const input = {
            $xml: '<sCountryISOCode>US</sCountryISOCode>',
        }
        const operation = await client.CountryNameAsync(input)

        expect(operation.result.CountryNameResult).to.equal('United States')
    })

    describe('Example of test over a list -@ Smoke', () => {
        const countryList = [
            { countryIso: 'US', countryName: 'United States' },
            { countryIso: 'CA', countryName: 'Canada' },
            { countryIso: 'MX', countryName: 'Mexico' },
            { countryIso: 'UY', countryName: 'Uruguay' },
        ]

        for (const countryInfo of countryList) {
            it(`should correctly get the country name for ${countryInfo.countryIso}`, async () => {
                const input: CountryName = {
                    sCountryISOCode: countryInfo.countryIso,
                }

                const { result } = await client.CountryNameAsync(input)

                expect(result.CountryNameResult).to.equal(
                    countryInfo.countryName,
                )

                const isoCode: CountryIsoCode = {
                    sCountryName: result.CountryNameResult,
                }

                const countyOperation =
                    await client.CountryISOCodeAsync(isoCode)

                expect(countyOperation.result.CountryISOCodeResult).to.equal(
                    countryInfo.countryIso,
                )
            })
        }
    })

    it('should return an error when the country code is invalid -@ Smoke', async () => {
        const input = {
            sCountryISOCode: '',
        }

        const { result } = await client.CountryNameAsync(input)

        expect(result.CountryNameResult).to.equal(
            'Country not found in the database',
        )
    })

    it('should return an error when the country code is a number', async () => {
        const input = {
            sCountryISOCode: '123',
        }

        const { result } = await client.CountryNameAsync(input)
        expect(result.CountryNameResult).to.equal(
            'Country not found in the database',
        )
    })

    it('custom service example -@ Mock', async () => {
        const server = await ApiClient.getService(
            './resources/country.wsdl',
            '/Mock',
            customCountryNameService,
        )

        const customClient = await ApiClient.getClient<CountryClient>({
            url: '/Mock?wsdl',
            port: server.port,
            mock: true,
        })
        const language: CountryIsoCode = {
            sCountryISOCode: 'Pepe',
        }

        const { result } = await customClient.CountryNameAsync(language)

        expect(result.CountryNameResult).to.equal('English')
    })
})
