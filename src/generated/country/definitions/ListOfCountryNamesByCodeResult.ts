import { TCountryCodeAndName } from './TCountryCodeAndName'

/**
 * ListOfCountryNamesByCodeResult
 * @targetNSAlias `tns`
 * @targetNamespace `http://www.oorsprong.org/websamples.countryinfo`
 */
export interface ListOfCountryNamesByCodeResult {
    /** tCountryCodeAndName[] */
    tCountryCodeAndName?: Array<TCountryCodeAndName>
    /** Hold additional properties */
    [arg: string]: any
}
