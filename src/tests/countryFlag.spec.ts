import { expect } from 'chai'
import { ApiClient } from '../client/ApiClientBase'
import { CountryClient } from '../generated/country'
import { ExtendedClient } from '../client/utils'

describe('Country Flag Tests', () => {
    let client: ExtendedClient<CountryClient>

    before(async function () {
        client = await ApiClient.getClient<CountryClient>(
            {
                url: './resources/country.wsdl',
            },
            { contextToReport: this },
        )
    })

    const countryList = [
        {
            countryIso: 'US',
            countryFlagLink:
                'http://www.oorsprong.org/WebSamples.CountryInfo/Flags/USA.jpg',
        },
        {
            countryIso: 'CA',
            countryFlagLink:
                'http://www.oorsprong.org/WebSamples.CountryInfo/Flags/Canada.jpg',
        },
        {
            countryIso: 'MX',
            countryFlagLink:
                'http://www.oorsprong.org/WebSamples.CountryInfo/Flags/Mexico.jpg',
        },
        {
            countryIso: 'UY',
            countryFlagLink:
                'http://www.oorsprong.org/WebSamples.CountryInfo/Flags/Uruguay.jpg',
        },
    ]

    for (const countryInfo of countryList) {
        it(`should correctly get the country flag for ${countryInfo.countryIso}`, async () => {
            const input = {
                sCountryISOCode: countryInfo.countryIso,
            }

            const operationResult = await client.CountryFlagAsync(input)

            expect(operationResult.result.CountryFlagResult).to.equal(
                countryInfo.countryFlagLink,
            )
        })
    }
})
