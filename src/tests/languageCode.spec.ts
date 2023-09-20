import { expect } from 'chai'
import { ApiClient, SoapError } from '../client/ApiClientBase'
import { CountryClient, LanguageIsoCode } from '../generated/country'

describe('Country Language Tests', () => {
    let client: CountryClient

    before(async () => {
        client = await ApiClient.getClient<CountryClient>({
            url: './resources/country.wsdl',
        })
    })

    it(`should throw and error`, async () => {
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
