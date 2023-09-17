import { expect } from 'chai'
import { ApiClient } from '../client/ApiClientBase'
import { ExampleWsdlClient } from '../generated/examplewsdl'

describe('Multiplication Tests', () => {
    let client: ExampleWsdlClient

    before(async () => {
        client = await ApiClient.getClient()
    })

    it('should correctly multiply two positive numbers', async () => {
        const input = {
            intA: 1,
            intB: 2,
        }

        const [response] = await client.MultiplyAsync(input)

        expect(response.MultiplyResult).to.equal(2)
    })

    it('should correctly multiply two negative numbers', async () => {
        const input = {
            intA: -1,
            intB: -2,
        }

        const [response] = await client.MultiplyAsync(input)

        expect(response.MultiplyResult).to.equal(2)
    })

    it('should correctly multiply a positive and a negative number', async () => {
        const input = {
            intA: 1,
            intB: -2,
        }

        const [response] = await client.MultiplyAsync(input)

        expect(response.MultiplyResult).to.equal(-2)
    })

    it('should correctly multiply a negative and a positive number', async () => {
        const input = {
            intA: -1,
            intB: 2,
        }

        const [response] = await client.MultiplyAsync(input)

        expect(response.MultiplyResult).to.equal(-2)
    })

    it('should correctly multiply a negative number by zero', async () => {
        const input = {
            intA: -1,
            intB: 0,
        }

        const [response] = await client.MultiplyAsync(input)

        expect(response.MultiplyResult).to.equal(0)
    })

    it('should correctly multiply a positive number by zero', async () => {
        const input = {
            intA: 1,
            intB: 0,
        }

        const [response] = await client.MultiplyAsync(input)

        expect(response.MultiplyResult).to.equal(0)
    })
})
