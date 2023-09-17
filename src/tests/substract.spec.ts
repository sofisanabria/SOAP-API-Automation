import { expect } from 'chai'
import { ApiClient } from '../client/ApiClientBase'
import { ExampleWsdlClient } from '../generated/examplewsdl'

describe('Subtraction Tests', () => {
    let client: ExampleWsdlClient

    before(async () => {
        client = await ApiClient.getClient()
    })

    it('should correctly subtract two positive numbers', async () => {
        const input = {
            intA: 1,
            intB: 2,
        }

        const [response] = await client.SubtractAsync(input)

        expect(response.SubtractResult).to.equal(-1)
    })

    it('should correctly subtract two negative numbers', async () => {
        const input = {
            intA: -1,
            intB: -2,
        }

        const [response] = await client.SubtractAsync(input)

        expect(response.SubtractResult).to.equal(1)
    })

    it('should correctly subtract a positive and a negative number', async () => {
        const input = {
            intA: 1,
            intB: -2,
        }

        const [response] = await client.SubtractAsync(input)

        expect(response.SubtractResult).to.equal(3)
    })

    it('should correctly subtract a negative and a positive number', async () => {
        const input = {
            intA: -1,
            intB: 2,
        }

        const [response] = await client.SubtractAsync(input)

        expect(response.SubtractResult).to.equal(-3)
    })

    it('should correctly subtract a negative number from a positive number', async () => {
        const input = {
            intA: 1,
            intB: -2,
        }

        const [response] = await client.SubtractAsync(input)

        expect(response.SubtractResult).to.equal(3)
    })

    it('should correctly subtract a positive number from a negative number', async () => {
        const input = {
            intA: -1,
            intB: 2,
        }

        const [response] = await client.SubtractAsync(input)

        expect(response.SubtractResult).to.equal(-3)
    })
})
