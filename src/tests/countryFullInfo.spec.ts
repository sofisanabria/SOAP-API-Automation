import { expect } from 'chai'
import { ApiClient } from '../client/ApiClientBase'
import { CountryClient } from '../generated/country'

describe('Full Country Info Tests', () => {
    let client: CountryClient

    before(async () => {
        client = await ApiClient.getClient<CountryClient>({
            url: './resources/country.wsdl',
        })
    })

    const countryList = [
        {
            countryIso: 'US',
            expectedInfo: {
                sISOCode: 'US',
                sName: 'United States',
                sCapitalCity: 'Washington',
                sPhoneCode: '1',
                sContinentCode: 'AM',
                sCurrencyISOCode: 'USD',
                sCountryFlag:
                    'http://www.oorsprong.org/WebSamples.CountryInfo/Flags/USA.jpg',
                Languages: {
                    tLanguage: [{ sISOCode: 'eng', sName: 'English' }],
                },
            },
        },
    ]

    for (const countryInfo of countryList) {
        it(`should correctly get the full country info for ${countryInfo.countryIso}`, async () => {
            const input = {
                sCountryISOCode: countryInfo.countryIso,
            }

            const [response] = await client.FullCountryInfoAsync(input)

            expect(response.FullCountryInfoResult).to.deep.equal(
                countryInfo.expectedInfo,
            )
        })
    }
})
