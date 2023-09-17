import { expect } from 'chai'
import { ApiClient } from '../client/ApiClientBase'
import { ExampleWsdlClient } from '../generated/examplewsdl'

describe('Addition Tests', () => {
    let client: ExampleWsdlClient

    before(async () => {
        client = await ApiClient.getClient()
    })

    it('should correctly add two positive numbers', async () => {
        const input = {
            intA: 1,
            intB: 2,
        }

        const [response, ...a] = await client.AddAsync(input)
        console.log(a)
        expect(response.AddResult).to.equal(3)
    })

    it('should correctly add two negative numbers', async () => {
        const input = {
            intA: -1,
            intB: -2,
        }

        const [response] = await client.AddAsync(input)

        expect(response.AddResult).to.equal(-3)
    })

    it('should correctly handle adding a positive and a negative number', async () => {
        const input = {
            intA: 1,
            intB: -2,
        }

        const [response] = await client.AddAsync(input)

        expect(response.AddResult).to.equal(-1)
    })
})
