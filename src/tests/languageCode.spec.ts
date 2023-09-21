import { expect } from 'chai'
import { ApiClient } from '../client/ApiClientBase'
import { CountryClient, LanguageIsoCode } from '../generated/country'
import { ExtendedClient } from '../client/utils'

describe('Country Language Tests', () => {
    let client: ExtendedClient<CountryClient>

    before(async function () {
        client = await ApiClient.getClient<CountryClient>(
            {
                url: './resources/country.wsdl',
            },
            { contextToReport: this },
        )
    })

    it(`should throw and error`, async function () {
        const language: LanguageIsoCode = {
            sLanguageName: 'English',
        }
        // Sending wrong properties
        language.a = 'a'
        const operationREsult = await client.LanguageISOCodeAsync(language)
        const soapError = operationREsult.err
        expect(soapError.response).to.not.be.undefined
        expect(soapError.response?.status).to.equal(500)
        expect(soapError.response?.data).to.contains(
            'There is a problem with the resource you are looking for, and it cannot be displayed.',
        )
    })
})
