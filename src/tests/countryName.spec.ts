import { expect } from 'chai'
import { ApiClient } from '../client/ApiClientBase'
import { CountryClient, CountryIsoCode } from '../generated/country'

describe('Country Name Tests', () => {
    let client: CountryClient

    before(async () => {
        client = await ApiClient.getClient()
    })

    it('should correctly get the country name', async () => {
        const input = {
            sCountryISOCode: 'US',
        }

        const [response] = await client.CountryNameAsync(input)

        expect(response.CountryNameResult).to.equal('United States')
    })

    describe('Example of test over a list', () => {
        const countryList = [
            { countryIso: 'US', countryName: 'United States' },
            { countryIso: 'CA', countryName: 'Canada' },
            { countryIso: 'MX', countryName: 'Mexico' },
            { countryIso: 'UY', countryName: 'Uruguay' },
        ]

        for (const countryInfo of countryList) {
            it(`should correctly get the country name for ${countryInfo.countryIso}`, async () => {
                const input = {
                    sCountryISOCode: countryInfo.countryIso,
                }

                const [response] = await client.CountryNameAsync(input)

                expect(response.CountryNameResult).to.equal(
                    countryInfo.countryName,
                )
            })
        }
    })

    it('should return an error when the country code is invalid', async () => {
        const input = {
            sCountryISOCode: '',
        }

        const [result] = await client.CountryNameAsync(input)

        expect(result.CountryNameResult).to.equal(
            'Country not found in the database',
        )
    })

    it('should return an error when the country code is a number', async () => {
        const input = {
            sCountryISOCode: '123',
        }

        const [result] = await client.CountryNameAsync(input)
        expect(result.CountryNameResult).to.equal(
            'Country not found in the database',
        )
    })

    it.only('custom service example', async () => {
        const customService = {
            CountryInfoService: {
                CountryInfoServiceSoap: {
                    CountryName: (args: any) => {
                        console.log(args)
                        return {
                            CountryNameResult: 'English',
                        }
                    },
                },
            },
        }
        const server = await ApiClient.getServer(customService, '/Mock')
        server.log = function (type, data) {
            console.log('Type: ' + type + ' data: ' + data)
        }
        const customClient = await ApiClient.getClient(
            'http://localhost:8002/Mock?wsdl',
        )
        const language: CountryIsoCode = {
            sCountryISOCode: 'Pepe',
        }

        console.log(customClient.describe())

        const result = await customClient.CountryNameAsync(language)

        expect(result[0].CountryNameResult).to.equal('English')
    })
})