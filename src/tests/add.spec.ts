import { expect } from 'chai'
import { ApiClient } from '../client/ApiClientBase'
import { Client, createClientAsync } from 'soap'

describe('Addition Tests', () => {
    let client: Client

    before(async () => {
        client = await ApiClient.getClient()
    })

    it('should correctly add two positive numbers', async () => {
        const input = {
            intA: 1,
            intB: 2,
        }

        const [response] = await client.AddAsync(input)

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
