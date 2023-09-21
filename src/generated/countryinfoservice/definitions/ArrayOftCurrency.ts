import { TCurrency } from './TCurrency'

/**
 * ArrayOftCurrency
 * @targetNSAlias `tns`
 * @targetNamespace `http://www.oorsprong.org/websamples.countryinfo`
 */
export interface ArrayOftCurrency {
    /** tCurrency */
    tCurrency?: Array<TCurrency>
    /** Hold additional properties */
    [arg: string]: any
}
