import { expect } from 'chai'
import { ApiClient } from '../client/ApiClientBase'
import {
    CountryClient,
    CountryIsoCode,
    CountryName,
} from '../generated/country'
import { customCountryNameService } from '../mocks/customCountryService'
import { ExtendedClient, readFromCSV } from '../client/utils'
import { CountryNameData } from '../data/countryName/countryName'

describe('Country Name Tests', () => {
    let client: ExtendedClient<CountryClient>

    before(async function () {
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

    describe('Example of test over a list -@ Smoke', () => {
        const countryList = readFromCSV<CountryNameData>(
            'src/data/countryName/countryName.csv',
        )

        before(async function () {
            client.updateContext(this)
        })

        for (const countryInfo of countryList) {
            it(`should correctly get the country name for ${countryInfo.countryIso}`, async () => {
                const input: CountryName = {
                    sCountryISOCode: countryInfo.countryIso,
                }

                const { result, rawResponse } =
                    await client.CountryNameAsync(input)

                expect(rawResponse.status).to.equal(200)

                expect(result.CountryNameResult).to.equal(
                    countryInfo.countryName,
                )

                const isoCode: CountryIsoCode = {
                    sCountryName: result.CountryNameResult,
                }

                const countyOperation =
                    await client.CountryISOCodeAsync(isoCode)

                expect(countyOperation.rawResponse.status).to.equal(200)

                expect(countyOperation.result.CountryISOCodeResult).to.equal(
                    countryInfo.countryIso,
                )
            })
        }
    })

    it('should correctly get the country name', async () => {
        const input = {
            $xml: '<sCountryISOCode>US</sCountryISOCode>',
        }
        const operation = await client.CountryNameAsync(input)

        expect(operation.result.CountryNameResult).to.equal('United States')
    })

    it('should return an error when the country code is invalid', async () => {
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

    it('custom service example -@ Mock', async function () {
        await ApiClient.createService(
            './resources/country.wsdl',
            '/Mock',
            customCountryNameService,
        )

        const customClient = await ApiClient.getClient<CountryClient>(
            {
                url: '/Mock',
                mock: true,
            },
            { contextToReport: this },
        )
        const language: CountryIsoCode = {
            sCountryISOCode: 'Pepe',
        }

        const { result } = await customClient.CountryNameAsync(language)

        expect(result.CountryNameResult).to.equal('English')
    })
})
