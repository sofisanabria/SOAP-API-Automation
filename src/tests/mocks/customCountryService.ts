const customCountryNameService = {
    CountryInfoService: {
        CountryInfoServiceSoap: {
            CountryName: (args: any, _cb: any, headers: any, req: any) => {
                console.log('CountryName', args, headers)
                console.log('From req', req.connection.remoteAddress)
                return {
                    CountryNameResult: 'English',
                }
            },
        },
        CountryInfoServiceSoap12: {
            CountryName: (args: any, _cb: any, headers: any, req: any) => {
                console.log('CountryName', args, headers)
                console.log('From req', req.connection.remoteAddress)
                return {
                    CountryNameResult: 'English',
                }
            },
        },
    },
}

export { customCountryNameService }
