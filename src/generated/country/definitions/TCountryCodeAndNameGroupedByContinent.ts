import { TContinent } from './TContinent'
import { ListOfCountryNamesByCodeResult } from './ListOfCountryNamesByCodeResult'

/**
 * tCountryCodeAndNameGroupedByContinent
 * @targetNSAlias `tns`
 * @targetNamespace `http://www.oorsprong.org/websamples.countryinfo`
 */
export interface TCountryCodeAndNameGroupedByContinent {
    /** Continent */
    Continent?: TContinent
    /** CountryCodeAndNames */
    CountryCodeAndNames?: ListOfCountryNamesByCodeResult
    /** Hold additional properties */
    [arg: string]: any
}
