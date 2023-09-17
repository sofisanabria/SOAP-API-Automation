import { Languages } from './Languages'

/**
 * FullCountryInfoResult
 * @targetNSAlias `tns`
 * @targetNamespace `http://www.oorsprong.org/websamples.countryinfo`
 */
export interface FullCountryInfoResult {
    /** xs:string */
    sISOCode?: string
    /** xs:string */
    sName?: string
    /** xs:string */
    sCapitalCity?: string
    /** xs:string */
    sPhoneCode?: string
    /** xs:string */
    sContinentCode?: string
    /** xs:string */
    sCurrencyISOCode?: string
    /** xs:string */
    sCountryFlag?: string
    /** Languages */
    Languages?: Languages
    [arg: string]: any
}
