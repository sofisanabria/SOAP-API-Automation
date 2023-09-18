import { expect } from 'chai'
import { ApiClient } from '../client/ApiClientBase'
import { CountryClient } from '../generated/country'

describe('Country Flag Tests', () => {
    let client: CountryClient

    before(async () => {
        client = await ApiClient.getClient<CountryClient>({
            url: './resources/country.wsdl',
        })
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

            const [response] = await client.CountryFlagAsync(input)

            expect(response.CountryFlagResult).to.equal(
                countryInfo.countryFlagLink,
            )
        })
    }
})
