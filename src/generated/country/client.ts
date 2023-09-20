import {
    Client as SoapClient,
    createClientAsync as soapCreateClientAsync,
} from 'soap'
import { ListOfContinentsByName } from './definitions/ListOfContinentsByName'
import { ListOfContinentsByNameResponse } from './definitions/ListOfContinentsByNameResponse'
import { ListOfContinentsByCode } from './definitions/ListOfContinentsByCode'
import { ListOfContinentsByCodeResponse } from './definitions/ListOfContinentsByCodeResponse'
import { ListOfCurrenciesByName } from './definitions/ListOfCurrenciesByName'
import { ListOfCurrenciesByNameResponse } from './definitions/ListOfCurrenciesByNameResponse'
import { ListOfCurrenciesByCode } from './definitions/ListOfCurrenciesByCode'
import { ListOfCurrenciesByCodeResponse } from './definitions/ListOfCurrenciesByCodeResponse'
import { CurrencyName } from './definitions/CurrencyName'
import { CurrencyNameResponse } from './definitions/CurrencyNameResponse'
import { ListOfCountryNamesByCode } from './definitions/ListOfCountryNamesByCode'
import { ListOfCountryNamesByCodeResponse } from './definitions/ListOfCountryNamesByCodeResponse'
import { ListOfCountryNamesByName } from './definitions/ListOfCountryNamesByName'
import { ListOfCountryNamesByNameResponse } from './definitions/ListOfCountryNamesByNameResponse'
import { ListOfCountryNamesGroupedByContinent } from './definitions/ListOfCountryNamesGroupedByContinent'
import { ListOfCountryNamesGroupedByContinentResponse } from './definitions/ListOfCountryNamesGroupedByContinentResponse'
import { CountryName } from './definitions/CountryName'
import { CountryNameResponse } from './definitions/CountryNameResponse'
import { CountryIsoCode } from './definitions/CountryIsoCode'
import { CountryIsoCodeResponse } from './definitions/CountryIsoCodeResponse'
import { CapitalCity } from './definitions/CapitalCity'
import { CapitalCityResponse } from './definitions/CapitalCityResponse'
import { CountryCurrency } from './definitions/CountryCurrency'
import { CountryCurrencyResponse } from './definitions/CountryCurrencyResponse'
import { CountryFlag } from './definitions/CountryFlag'
import { CountryFlagResponse } from './definitions/CountryFlagResponse'
import { CountryIntPhoneCode } from './definitions/CountryIntPhoneCode'
import { CountryIntPhoneCodeResponse } from './definitions/CountryIntPhoneCodeResponse'
import { FullCountryInfo } from './definitions/FullCountryInfo'
import { FullCountryInfoResponse } from './definitions/FullCountryInfoResponse'
import { FullCountryInfoAllCountries } from './definitions/FullCountryInfoAllCountries'
import { FullCountryInfoAllCountriesResponse } from './definitions/FullCountryInfoAllCountriesResponse'
import { CountriesUsingCurrency } from './definitions/CountriesUsingCurrency'
import { CountriesUsingCurrencyResponse } from './definitions/CountriesUsingCurrencyResponse'
import { ListOfLanguagesByName } from './definitions/ListOfLanguagesByName'
import { ListOfLanguagesByNameResponse } from './definitions/ListOfLanguagesByNameResponse'
import { ListOfLanguagesByCode } from './definitions/ListOfLanguagesByCode'
import { ListOfLanguagesByCodeResponse } from './definitions/ListOfLanguagesByCodeResponse'
import { LanguageName } from './definitions/LanguageName'
import { LanguageNameResponse } from './definitions/LanguageNameResponse'
import { LanguageIsoCode } from './definitions/LanguageIsoCode'
import { LanguageIsoCodeResponse } from './definitions/LanguageIsoCodeResponse'
import { CountryInfoService } from './services/CountryInfoService'

export interface CountryClient extends SoapClient {
    CountryInfoService: CountryInfoService
    ListOfContinentsByNameAsync(
        listOfContinentsByName: ListOfContinentsByName,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): Promise<{
        err: any
        result: ListOfContinentsByNameResponse
        soapHeader: { [k: string]: any }
        httpHeader: any
        soapResponse: any
        rawResponse: any
        rawRequest: any
        mtomAttachments: any
    }>
    ListOfContinentsByCodeAsync(
        listOfContinentsByCode: ListOfContinentsByCode,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): Promise<{
        err: any
        result: ListOfContinentsByCodeResponse
        soapHeader: { [k: string]: any }
        httpHeader: any
        soapResponse: any
        rawResponse: any
        rawRequest: any
        mtomAttachments: any
    }>
    ListOfCurrenciesByNameAsync(
        listOfCurrenciesByName: ListOfCurrenciesByName,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): Promise<{
        err: any
        result: ListOfCurrenciesByNameResponse
        soapHeader: { [k: string]: any }
        httpHeader: any
        soapResponse: any
        rawResponse: any
        rawRequest: any
        mtomAttachments: any
    }>
    ListOfCurrenciesByCodeAsync(
        listOfCurrenciesByCode: ListOfCurrenciesByCode,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): Promise<{
        err: any
        result: ListOfCurrenciesByCodeResponse
        soapHeader: { [k: string]: any }
        httpHeader: any
        soapResponse: any
        rawResponse: any
        rawRequest: any
        mtomAttachments: any
    }>
    CurrencyNameAsync(
        currencyName: CurrencyName,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): Promise<{
        err: any
        result: CurrencyNameResponse
        soapHeader: { [k: string]: any }
        httpHeader: any
        soapResponse: any
        rawResponse: any
        rawRequest: any
        mtomAttachments: any
    }>
    ListOfCountryNamesByCodeAsync(
        listOfCountryNamesByCode: ListOfCountryNamesByCode,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): Promise<{
        err: any
        result: ListOfCountryNamesByCodeResponse
        soapHeader: { [k: string]: any }
        httpHeader: any
        soapResponse: any
        rawResponse: any
        rawRequest: any
        mtomAttachments: any
    }>
    ListOfCountryNamesByNameAsync(
        listOfCountryNamesByName: ListOfCountryNamesByName,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): Promise<{
        err: any
        result: ListOfCountryNamesByNameResponse
        soapHeader: { [k: string]: any }
        httpHeader: any
        soapResponse: any
        rawResponse: any
        rawRequest: any
        mtomAttachments: any
    }>
    ListOfCountryNamesGroupedByContinentAsync(
        listOfCountryNamesGroupedByContinent: ListOfCountryNamesGroupedByContinent,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): Promise<{
        err: any
        result: ListOfCountryNamesGroupedByContinentResponse
        soapHeader: { [k: string]: any }
        httpHeader: any
        soapResponse: any
        rawResponse: any
        rawRequest: any
        mtomAttachments: any
    }>
    CountryNameAsync(
        countryName: CountryName,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): Promise<{
        err: any
        result: CountryNameResponse
        soapHeader: { [k: string]: any }
        httpHeader: any
        soapResponse: any
        rawResponse: any
        rawRequest: any
        mtomAttachments: any
    }>
    CountryISOCodeAsync(
        countryIsoCode: CountryIsoCode,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): Promise<{
        err: any
        result: CountryIsoCodeResponse
        soapHeader: { [k: string]: any }
        httpHeader: any
        soapResponse: any
        rawResponse: any
        rawRequest: any
        mtomAttachments: any
    }>
    CapitalCityAsync(
        capitalCity: CapitalCity,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): Promise<{
        err: any
        result: CapitalCityResponse
        soapHeader: { [k: string]: any }
        httpHeader: any
        soapResponse: any
        rawResponse: any
        rawRequest: any
        mtomAttachments: any
    }>
    CountryCurrencyAsync(
        countryCurrency: CountryCurrency,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): Promise<{
        err: any
        result: CountryCurrencyResponse
        soapHeader: { [k: string]: any }
        httpHeader: any
        soapResponse: any
        rawResponse: any
        rawRequest: any
        mtomAttachments: any
    }>
    CountryFlagAsync(
        countryFlag: CountryFlag,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): Promise<{
        err: any
        result: CountryFlagResponse
        soapHeader: { [k: string]: any }
        httpHeader: any
        soapResponse: any
        rawResponse: any
        rawRequest: any
        mtomAttachments: any
    }>
    CountryIntPhoneCodeAsync(
        countryIntPhoneCode: CountryIntPhoneCode,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): Promise<{
        err: any
        result: CountryIntPhoneCodeResponse
        soapHeader: { [k: string]: any }
        httpHeader: any
        soapResponse: any
        rawResponse: any
        rawRequest: any
        mtomAttachments: any
    }>
    FullCountryInfoAsync(
        fullCountryInfo: FullCountryInfo,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): Promise<{
        err: any
        result: FullCountryInfoResponse
        soapHeader: { [k: string]: any }
        httpHeader: any
        soapResponse: any
        rawResponse: any
        rawRequest: any
        mtomAttachments: any
    }>
    FullCountryInfoAllCountriesAsync(
        fullCountryInfoAllCountries: FullCountryInfoAllCountries,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): Promise<{
        err: any
        result: FullCountryInfoAllCountriesResponse
        soapHeader: { [k: string]: any }
        httpHeader: any
        soapResponse: any
        rawResponse: any
        rawRequest: any
        mtomAttachments: any
    }>
    CountriesUsingCurrencyAsync(
        countriesUsingCurrency: CountriesUsingCurrency,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): Promise<{
        err: any
        result: CountriesUsingCurrencyResponse
        soapHeader: { [k: string]: any }
        httpHeader: any
        soapResponse: any
        rawResponse: any
        rawRequest: any
        mtomAttachments: any
    }>
    ListOfLanguagesByNameAsync(
        listOfLanguagesByName: ListOfLanguagesByName,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): Promise<{
        err: any
        result: ListOfLanguagesByNameResponse
        soapHeader: { [k: string]: any }
        httpHeader: any
        soapResponse: any
        rawResponse: any
        rawRequest: any
        mtomAttachments: any
    }>
    ListOfLanguagesByCodeAsync(
        listOfLanguagesByCode: ListOfLanguagesByCode,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): Promise<{
        err: any
        result: ListOfLanguagesByCodeResponse
        soapHeader: { [k: string]: any }
        httpHeader: any
        soapResponse: any
        rawResponse: any
        rawRequest: any
        mtomAttachments: any
    }>
    LanguageNameAsync(
        languageName: LanguageName,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): Promise<{
        err: any
        result: LanguageNameResponse
        soapHeader: { [k: string]: any }
        httpHeader: any
        soapResponse: any
        rawResponse: any
        rawRequest: any
        mtomAttachments: any
    }>
    LanguageISOCodeAsync(
        languageIsoCode: LanguageIsoCode,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): Promise<{
        err: any
        result: LanguageIsoCodeResponse
        soapHeader: { [k: string]: any }
        httpHeader: any
        soapResponse: any
        rawResponse: any
        rawRequest: any
        mtomAttachments: any
    }>
    ListOfContinentsByNameAsync(
        listOfContinentsByName: ListOfContinentsByName,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): Promise<{
        err: any
        result: ListOfContinentsByNameResponse
        soapHeader: { [k: string]: any }
        httpHeader: any
        soapResponse: any
        rawResponse: any
        rawRequest: any
        mtomAttachments: any
    }>
    ListOfContinentsByCodeAsync(
        listOfContinentsByCode: ListOfContinentsByCode,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): Promise<{
        err: any
        result: ListOfContinentsByCodeResponse
        soapHeader: { [k: string]: any }
        httpHeader: any
        soapResponse: any
        rawResponse: any
        rawRequest: any
        mtomAttachments: any
    }>
    ListOfCurrenciesByNameAsync(
        listOfCurrenciesByName: ListOfCurrenciesByName,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): Promise<{
        err: any
        result: ListOfCurrenciesByNameResponse
        soapHeader: { [k: string]: any }
        httpHeader: any
        soapResponse: any
        rawResponse: any
        rawRequest: any
        mtomAttachments: any
    }>
    ListOfCurrenciesByCodeAsync(
        listOfCurrenciesByCode: ListOfCurrenciesByCode,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): Promise<{
        err: any
        result: ListOfCurrenciesByCodeResponse
        soapHeader: { [k: string]: any }
        httpHeader: any
        soapResponse: any
        rawResponse: any
        rawRequest: any
        mtomAttachments: any
    }>
    CurrencyNameAsync(
        currencyName: CurrencyName,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): Promise<{
        err: any
        result: CurrencyNameResponse
        soapHeader: { [k: string]: any }
        httpHeader: any
        soapResponse: any
        rawResponse: any
        rawRequest: any
        mtomAttachments: any
    }>
    ListOfCountryNamesByCodeAsync(
        listOfCountryNamesByCode: ListOfCountryNamesByCode,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): Promise<{
        err: any
        result: ListOfCountryNamesByCodeResponse
        soapHeader: { [k: string]: any }
        httpHeader: any
        soapResponse: any
        rawResponse: any
        rawRequest: any
        mtomAttachments: any
    }>
    ListOfCountryNamesByNameAsync(
        listOfCountryNamesByName: ListOfCountryNamesByName,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): Promise<{
        err: any
        result: ListOfCountryNamesByNameResponse
        soapHeader: { [k: string]: any }
        httpHeader: any
        soapResponse: any
        rawResponse: any
        rawRequest: any
        mtomAttachments: any
    }>
    ListOfCountryNamesGroupedByContinentAsync(
        listOfCountryNamesGroupedByContinent: ListOfCountryNamesGroupedByContinent,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): Promise<{
        err: any
        result: ListOfCountryNamesGroupedByContinentResponse
        soapHeader: { [k: string]: any }
        httpHeader: any
        soapResponse: any
        rawResponse: any
        rawRequest: any
        mtomAttachments: any
    }>
    CountryNameAsync(
        countryName: CountryName,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): Promise<{
        err: any
        result: CountryNameResponse
        soapHeader: { [k: string]: any }
        httpHeader: any
        soapResponse: any
        rawResponse: any
        rawRequest: any
        mtomAttachments: any
    }>
    CountryISOCodeAsync(
        countryIsoCode: CountryIsoCode,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): Promise<{
        err: any
        result: CountryIsoCodeResponse
        soapHeader: { [k: string]: any }
        httpHeader: any
        soapResponse: any
        rawResponse: any
        rawRequest: any
        mtomAttachments: any
    }>
    CapitalCityAsync(
        capitalCity: CapitalCity,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): Promise<{
        err: any
        result: CapitalCityResponse
        soapHeader: { [k: string]: any }
        httpHeader: any
        soapResponse: any
        rawResponse: any
        rawRequest: any
        mtomAttachments: any
    }>
    CountryCurrencyAsync(
        countryCurrency: CountryCurrency,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): Promise<{
        err: any
        result: CountryCurrencyResponse
        soapHeader: { [k: string]: any }
        httpHeader: any
        soapResponse: any
        rawResponse: any
        rawRequest: any
        mtomAttachments: any
    }>
    CountryFlagAsync(
        countryFlag: CountryFlag,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): Promise<{
        err: any
        result: CountryFlagResponse
        soapHeader: { [k: string]: any }
        httpHeader: any
        soapResponse: any
        rawResponse: any
        rawRequest: any
        mtomAttachments: any
    }>
    CountryIntPhoneCodeAsync(
        countryIntPhoneCode: CountryIntPhoneCode,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): Promise<{
        err: any
        result: CountryIntPhoneCodeResponse
        soapHeader: { [k: string]: any }
        httpHeader: any
        soapResponse: any
        rawResponse: any
        rawRequest: any
        mtomAttachments: any
    }>
    FullCountryInfoAsync(
        fullCountryInfo: FullCountryInfo,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): Promise<{
        err: any
        result: FullCountryInfoResponse
        soapHeader: { [k: string]: any }
        httpHeader: any
        soapResponse: any
        rawResponse: any
        rawRequest: any
        mtomAttachments: any
    }>
    FullCountryInfoAllCountriesAsync(
        fullCountryInfoAllCountries: FullCountryInfoAllCountries,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): Promise<{
        err: any
        result: FullCountryInfoAllCountriesResponse
        soapHeader: { [k: string]: any }
        httpHeader: any
        soapResponse: any
        rawResponse: any
        rawRequest: any
        mtomAttachments: any
    }>
    CountriesUsingCurrencyAsync(
        countriesUsingCurrency: CountriesUsingCurrency,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): Promise<{
        err: any
        result: CountriesUsingCurrencyResponse
        soapHeader: { [k: string]: any }
        httpHeader: any
        soapResponse: any
        rawResponse: any
        rawRequest: any
        mtomAttachments: any
    }>
    ListOfLanguagesByNameAsync(
        listOfLanguagesByName: ListOfLanguagesByName,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): Promise<{
        err: any
        result: ListOfLanguagesByNameResponse
        soapHeader: { [k: string]: any }
        httpHeader: any
        soapResponse: any
        rawResponse: any
        rawRequest: any
        mtomAttachments: any
    }>
    ListOfLanguagesByCodeAsync(
        listOfLanguagesByCode: ListOfLanguagesByCode,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): Promise<{
        err: any
        result: ListOfLanguagesByCodeResponse
        soapHeader: { [k: string]: any }
        httpHeader: any
        soapResponse: any
        rawResponse: any
        rawRequest: any
        mtomAttachments: any
    }>
    LanguageNameAsync(
        languageName: LanguageName,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): Promise<{
        err: any
        result: LanguageNameResponse
        soapHeader: { [k: string]: any }
        httpHeader: any
        soapResponse: any
        rawResponse: any
        rawRequest: any
        mtomAttachments: any
    }>
    LanguageISOCodeAsync(
        languageIsoCode: LanguageIsoCode,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): Promise<{
        err: any
        result: LanguageIsoCodeResponse
        soapHeader: { [k: string]: any }
        httpHeader: any
        soapResponse: any
        rawResponse: any
        rawRequest: any
        mtomAttachments: any
    }>
}

/** Create CountryClient */
export function createClientAsync(
    ...args: Parameters<typeof soapCreateClientAsync>
): Promise<CountryClient> {
    return soapCreateClientAsync(args[0], args[1], args[2]) as any
}
