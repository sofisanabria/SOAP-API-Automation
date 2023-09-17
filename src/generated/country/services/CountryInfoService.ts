import { CountryInfoServiceSoap } from '../ports/CountryInfoServiceSoap'
import { CountryInfoServiceSoap12 } from '../ports/CountryInfoServiceSoap12'

export interface CountryInfoService {
    readonly CountryInfoServiceSoap: CountryInfoServiceSoap
    readonly CountryInfoServiceSoap12: CountryInfoServiceSoap12
}
