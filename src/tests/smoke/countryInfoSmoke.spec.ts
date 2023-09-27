import { expect } from 'chai'
import { CountryClient, CountryIsoCode } from '../../generated/country'
import { ExtendedClient, readFromCSV } from '../../client/utils'
import { CountryNameData } from '../../data/countryName/countryName'
import { ApiClient } from '../../client/ApiClientBase'

describe('Full Country Info Tests -@ Smoke', () => {
    let client: ExtendedClient<CountryClient>
    const countryList = readFromCSV<CountryNameData>(
        'src/data/countryName/countryName.csv',
    )

    before(async function () {
        client = await ApiClient.getClient<CountryClient>(
            {
                url: './resources/country.wsdl',
            },
            { contextToReport: this },
        )
    })

    for (const countryInfo of countryList) {
        it(`should correctly get the full country info for ${countryInfo.countryIso}`, async () => {
            const input = {
                sCountryISOCode: countryInfo.countryIso,
            }

            const fullCountryInfo = await client.FullCountryInfoAsync(input)

            expect(fullCountryInfo.rawResponse.status).to.equal(200)

            const sName: CountryIsoCode = {
                sCountryName:
                    fullCountryInfo.result.FullCountryInfoResult?.sName,
            }

            const { result } = await client.CountryISOCodeAsync(sName)

            expect(result.CountryISOCodeResult).to.deep.equal(
                countryInfo.countryIso,
            )
        })
    }
})
