import { expect } from 'chai'
import { ApiClient } from '../client/ApiClientBase'
import { CountryClient } from '../generated/country'
import { ExtendedClient } from '../client/utils'

describe('Full Country Info Tests', () => {
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

            const { result } = await client.FullCountryInfoAsync(input)

            expect(result.FullCountryInfoResult).to.deep.equal(
                countryInfo.expectedInfo,
            )
        })
    }
})
