import { expect } from 'chai'
import { ApiClient } from '../client/ApiClientBase'
import { ExampleWsdlClient } from '../generated/examplewsdl'

describe('Division Tests', () => {
    let client: ExampleWsdlClient

    before(async () => {
        client = await ApiClient.getClient()
    })

    it('should correctly divide two positive numbers', async () => {
        const input = {
            intA: 2,
            intB: 1,
        }

        const [response] = await client.DivideAsync(input)

        expect(response.DivideResult).to.equal(2)
    })

    it('should correctly divide two negative numbers', async () => {
        const input = {
            intA: -2,
            intB: -2,
        }

        const [response] = await client.DivideAsync(input)

        expect(response.DivideResult).to.equal(1)
    })

    it('should correctly divide a positive and a negative number', async () => {
        const input = {
            intA: 1,
            intB: -2,
        }

        const [response] = await client.DivideAsync(input)

        expect(response.DivideResult).to.equal(0)
    })

    it('should correctly divide a negative and a positive number', async () => {
        const input = {
            intA: -1,
            intB: 2,
        }

        const [response] = await client.DivideAsync(input)

        expect(response.DivideResult).to.equal(0)
    })

    it('should correctly divide a negative number by zero', async () => {
        const input = {
            intA: -1,
            intB: 0,
        }

        try {
            await client.DivideAsync(input)
        } catch (e: any) {
            const response = e.response
            expect(response.status).to.equal(500)
            expect(response.statusText).to.equal('Internal Server Error')
            expect(response.data).to.contains(
                'Arithmetic operation resulted in an overflow.',
            )
        }
    })
})
