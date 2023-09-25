import { expect } from 'chai'
import { ApiClient } from '../../client/ApiClientBase'
import { ExtendedClient, readFromCSV } from '../../client/utils'
import { CountryNameData } from '../../data/countryName/countryName'
import {
    CountryClient,
    CountryIsoCode,
    CountryName,
} from '../../generated/country'

describe('Example of test over a list -@ Smoke', () => {
    const countryList = readFromCSV<CountryNameData>(
        'src/data/countryName/countryName.csv',
    )

    let client: ExtendedClient<CountryClient>

    before(async function () {
        client = await ApiClient.getClient<CountryClient>(
            {
                url: './resources/country.wsdl',
            },
            { contextToReport: this },
        )
    })

    for (const countryInfo of countryList) {
        it(`should correctly get the country name for ${countryInfo.countryIso}`, async () => {
            const input: CountryName = {
                sCountryISOCode: countryInfo.countryIso,
            }

            const { result, rawResponse } = await client.CountryNameAsync(input)

            expect(rawResponse.status).to.equal(200)

            expect(result.CountryNameResult).to.equal(countryInfo.countryName)

            const isoCode: CountryIsoCode = {
                sCountryName: result.CountryNameResult,
            }

            const countyOperation = await client.CountryISOCodeAsync(isoCode)

            expect(countyOperation.rawResponse.status).to.equal(200)

            expect(countyOperation.result.CountryISOCodeResult).to.equal(
                countryInfo.countryIso,
            )
        })
    }
})
