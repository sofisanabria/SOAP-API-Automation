import { expect } from 'chai'
import { ApiClient } from '../client/ApiClientBase'
import { CountryClient, CountryIsoCode } from '../generated/country'
import { ExtendedClient } from '../client/utils'
import { customCapitalCityService } from '../mocks/customCapitalCityService'

describe('Country IntPhoneCode Tests', () => {
    let client: ExtendedClient<CountryClient>
    let mockClient: ExtendedClient<CountryClient>

    before(async function () {
        const onlineURL =
            'http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL'
        client = await ApiClient.getClient<CountryClient>(
            {
                url: onlineURL,
            },
            { contextToReport: this },
        )
        await ApiClient.createService(
            onlineURL,
            '/MockOnline',
            customCapitalCityService,
        )
        mockClient = await ApiClient.getClient<CountryClient>(
            {
                url: '/MockOnline',
                mock: true,
            },
            { contextToReport: this },
        )
    })

    after(() => {
        ApiClient.closeServer()
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

    it('Should work with url service mock -@ Mock', async function () {
        const input: CountryIsoCode = {
            sCountryISOCode: 'UA',
        }

        const originalOperation = await client.CapitalCityAsync(input)

        const mockOperation = await mockClient.CapitalCityAsync(input)

        expect(originalOperation.result.CapitalCityResult).to.equal('Kiev')
        expect(mockOperation.result.CapitalCityResult).to.equal(
            'UA Capital City',
        )
    })
})
