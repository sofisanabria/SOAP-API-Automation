import { TContinent } from './TContinent'

/**
 * ListOfContinentsByNameResult
 * @targetNSAlias `tns`
 * @targetNamespace `http://www.oorsprong.org/websamples.countryinfo`
 */
export interface ListOfContinentsByNameResult {
    /** tContinent[] */
    tContinent?: Array<TContinent>
    /** Hold additional properties */
    [arg: string]: any
}
