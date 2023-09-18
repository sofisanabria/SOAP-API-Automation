import { TLanguage } from './TLanguage'

/**
 * Languages
 * @targetNSAlias `tns`
 * @targetNamespace `http://www.oorsprong.org/websamples.countryinfo`
 */
export interface Languages {
    /** tLanguage[] */
    tLanguage?: Array<TLanguage>
    [arg: string]: any
}
