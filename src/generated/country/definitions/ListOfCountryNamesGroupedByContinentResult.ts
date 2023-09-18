import { TCountryCodeAndNameGroupedByContinent } from './TCountryCodeAndNameGroupedByContinent'

/**
 * ListOfCountryNamesGroupedByContinentResult
 * @targetNSAlias `tns`
 * @targetNamespace `http://www.oorsprong.org/websamples.countryinfo`
 */
export interface ListOfCountryNamesGroupedByContinentResult {
    /** tCountryCodeAndNameGroupedByContinent[] */
    tCountryCodeAndNameGroupedByContinent?: Array<TCountryCodeAndNameGroupedByContinent>
    [arg: string]: any
}
