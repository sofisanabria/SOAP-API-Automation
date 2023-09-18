import { TContinent } from './TContinent'

/**
 * ArrayOftContinent
 * @targetNSAlias `tns`
 * @targetNamespace `http://www.oorsprong.org/websamples.countryinfo`
 */
export interface ArrayOftContinent {
    /** tContinent */
    tContinent?: Array<TContinent>
    /** Hold additional properties */
    [arg: string]: any
}
