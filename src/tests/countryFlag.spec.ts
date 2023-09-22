import { expect } from 'chai'
import { ApiClient } from '../client/ApiClientBase'
import { CountryClient } from '../generated/country'
import { ExtendedClient, readFromCSV } from '../client/utils'
import Papa, { ParseResult } from 'papaparse'
import countryFlags from '../data/countryFlag.json'

describe.only('Country Flag Tests', () => {
    let client: ExtendedClient<CountryClient>
    interface CountryFlagData {
        countryIso: string
        countryFlagLink: string
    }
    const countryList = readFromCSV<CountryFlagData>('src/data/countryFlag.csv')
    const countryListFromJson: CountryFlagData[] = countryFlags.countryList

    before(async function () {
        client = await ApiClient.getClient<CountryClient>(
            {
                url: './resources/country.wsdl',
            },
            { contextToReport: this },
        )
    })

    for (const countryInfo of countryList) {
        it(`Should correctly get the country flag for ${countryInfo.countryIso} - CSV`, async () => {
            const input = {
                sCountryISOCode: countryInfo.countryIso,
            }

            const { result, rawResponse } = await client.CountryFlagAsync(input)

            expect(rawResponse.status).to.equal(200)
            expect(result.CountryFlagResult).to.equal(
                countryInfo.countryFlagLink,
            )
        })
    }

    // We can use an it inside a for loop if we use a static list of countries
    for (const countryInfo of countryListFromJson) {
        it(`Should correctly get the country flag for ${countryInfo.countryIso} -Json`, async () => {
            const input = {
                sCountryISOCode: countryInfo.countryIso,
            }

            const { result, rawResponse } = await client.CountryFlagAsync(input)

            expect(rawResponse.status).to.equal(200)
            expect(result.CountryFlagResult).to.equal(
                countryInfo.countryFlagLink,
            )
        })
    }

    it("Should return an error if the country doesn't exist", async () => {
        const input = {
            sCountryISOCode: '12',
        }

        const { result, rawResponse, soapHeader, httpHeader } =
            await client.CountryFlagAsync(input)

        expect(rawResponse.status).to.equal(200)
        expect(rawResponse.statusText).to.equal('OK')
        expect(soapHeader).to.be.undefined

        expect(result.CountryFlagResult).to.equal(
            'Country not found in the database',
        )
    })
})
