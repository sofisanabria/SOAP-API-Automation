import { CapitalCity, CapitalCityResponse } from '../../generated/country'

const customCapitalCityService = {
    CountryInfoService: {
        CountryInfoServiceSoap: {
            CapitalCity: (
                args: CapitalCity,
                _cb: any,
                headers: any,
                req: any,
            ): CapitalCityResponse => {
                console.log('Capital City', args, headers)
                console.log('From req', req.connection.remoteAddress)
                if (args.sCountryISOCode == 'US') {
                    throw {
                        Fault: {
                            Code: {
                                Value: 'soap:Sender',
                                Subcode: { value: 'rpc:City' },
                            },
                            Reason: { Text: 'Processing Error' },
                            statusCode: 500,
                        },
                    }
                }
                const newCapitalCity: CapitalCityResponse = {
                    CapitalCityResult: args.sCountryISOCode + ' Capital City',
                }
                return newCapitalCity
            },
        },
    },
}

export { customCapitalCityService }
