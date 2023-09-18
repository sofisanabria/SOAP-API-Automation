import { TCurrency } from './TCurrency'

/**
 * ListOfCurrenciesByNameResult
 * @targetNSAlias `tns`
 * @targetNamespace `http://www.oorsprong.org/websamples.countryinfo`
 */
export interface ListOfCurrenciesByNameResult {
    /** tCurrency[] */
    tCurrency?: Array<TCurrency>
    /** Hold additional properties */
    [arg: string]: any
}
