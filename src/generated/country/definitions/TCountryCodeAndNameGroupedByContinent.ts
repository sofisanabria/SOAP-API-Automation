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
    [arg: string]: any
}
