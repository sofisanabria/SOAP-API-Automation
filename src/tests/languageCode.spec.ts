import { expect } from 'chai'
import { ApiClient, SoapError } from '../client/ApiClientBase'
import { CountryClient, LanguageIsoCode } from '../generated/country'
import { Server } from 'soap'

describe('Country Language Tests', () => {
    let server: Server
    let client: CountryClient

    before(async () => {
        client = await ApiClient.getClient<CountryClient>()
    })

    it(`should throw and error`, async () => {
        try {
            const language: LanguageIsoCode = {
                sLanguageName: 'English',
            }
            // Sending wrong properties
            language.a = 'a'
            await client.LanguageISOCodeAsync(language)
        } catch (error: any) {
            const soapError = error as SoapError
            expect(soapError.response).to.not.be.undefined
            expect(soapError.response?.status).to.equal(500)
            expect(soapError.response?.data).to.contains(
                'There is a problem with the resource you are looking for, and it cannot be displayed.',
            )
        }
    })
})
