import { ArrayOftLanguage } from './ArrayOftLanguage'

/**
 * tCountryInfo
 * @targetNSAlias `tns`
 * @targetNamespace `http://www.oorsprong.org/websamples.countryinfo`
 */
export interface TCountryInfo {
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
    /** ArrayOftLanguage */
    Languages?: ArrayOftLanguage
    /** Hold additional properties */
    [arg: string]: any
}
