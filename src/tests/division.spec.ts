import { expect } from 'chai'
import { ApiClient } from '../client/ApiClientBase'
import { ExampleClient } from '../generated/example'

describe('Division Tests', () => {
    let client: ExampleClient

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
            const envelope = e.root.Envelope.Body.Fault
            expect(response.status).to.equal(500)
            expect(response.statusText).to.equal('Internal Server Error')

            expect(envelope.faultcode).to.equal('soap:Server')
            expect(envelope.faultstring).to.contains(
                'Arithmetic operation resulted in an overflow.',
            )
        }
    })
})
