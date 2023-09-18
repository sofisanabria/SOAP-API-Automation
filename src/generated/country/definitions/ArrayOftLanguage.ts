import { TLanguage } from './TLanguage'

/**
 * ArrayOftLanguage
 * @targetNSAlias `tns`
 * @targetNamespace `http://www.oorsprong.org/websamples.countryinfo`
 */
export interface ArrayOftLanguage {
    /** tLanguage */
    tLanguage?: Array<TLanguage>
    /** Hold additional properties */
    [arg: string]: any
}
