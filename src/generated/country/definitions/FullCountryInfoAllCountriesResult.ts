import { FullCountryInfoResult } from './FullCountryInfoResult'

/**
 * FullCountryInfoAllCountriesResult
 * @targetNSAlias `tns`
 * @targetNamespace `http://www.oorsprong.org/websamples.countryinfo`
 */
export interface FullCountryInfoAllCountriesResult {
    /** tCountryInfo[] */
    tCountryInfo?: Array<FullCountryInfoResult>
    [arg: string]: any
}
