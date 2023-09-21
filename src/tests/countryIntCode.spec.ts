import { expect } from 'chai'
import { ApiClient } from '../client/ApiClientBase'
import { CountryClient } from '../generated/country'
import { ExtendedClient } from '../client/utils'

describe('Country IntPhoneCode Tests', () => {
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
            intPhoneCode: '1',
        },
        {
            countryIso: 'CA',
            intPhoneCode: '1',
        },
        {
            countryIso: 'MX',
            intPhoneCode: '52',
        },
        {
            countryIso: 'UY',
            intPhoneCode: '598',
        },
    ]

    for (const countryInfo of countryList) {
        it(`should correctly get the country int phone code for ${countryInfo.countryIso}`, async () => {
            const input = {
                sCountryISOCode: countryInfo.countryIso,
            }

            const { result } = await client.CountryIntPhoneCodeAsync(input)

            expect(result.CountryIntPhoneCodeResult).to.equal(
                countryInfo.intPhoneCode,
            )
        })
    }
})
