import { Builder, parseStringPromise } from 'xml2js'

export async function modifyWsdl(wsdlXml: string, customServiceUrl: string) {
    const result = await parseStringPromise(wsdlXml)

    // Modify the service port location
    const definitions: any = result.definitions ?? result['wsdl:definitions']
    const service: any = definitions.service ?? definitions['wsdl:service']
    for (const serviceEntry of Object.entries(service)) {
        const serviceEntryValue = serviceEntry[1] as any
        for (const portEntry of Object.entries(
            serviceEntryValue.port ?? serviceEntryValue['wsdl:port'],
        )) {
            const value = portEntry[1] as any
            if (value['address']) {
                value['address'][0].$.location = customServiceUrl
            } else if (value['soap:address']) {
                value['soap:address'][0].$.location = customServiceUrl
            } else if (value['soap12:address']) {
                value['soap12:address'][0].$.location = customServiceUrl
            }
        }
    }

    // Convert the modified XML back to a string
    const builder = new Builder()
    return builder.buildObject(result)
}
