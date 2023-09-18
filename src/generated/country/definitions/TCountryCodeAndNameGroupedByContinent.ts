import { TContinent } from './TContinent'
import { ArrayOftCountryCodeAndName } from './ArrayOftCountryCodeAndName'

/**
 * tCountryCodeAndNameGroupedByContinent
 * @targetNSAlias `tns`
 * @targetNamespace `http://www.oorsprong.org/websamples.countryinfo`
 */
export interface TCountryCodeAndNameGroupedByContinent {
    /** tContinent */
    Continent?: TContinent
    /** ArrayOftCountryCodeAndName */
    CountryCodeAndNames?: ArrayOftCountryCodeAndName
    /** Hold additional properties */
    [arg: string]: any
}
