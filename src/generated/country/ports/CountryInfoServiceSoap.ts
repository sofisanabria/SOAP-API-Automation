import { ListOfContinentsByName } from '../definitions/ListOfContinentsByName'
import { ListOfContinentsByNameResponse } from '../definitions/ListOfContinentsByNameResponse'
import { ListOfContinentsByCode } from '../definitions/ListOfContinentsByCode'
import { ListOfContinentsByCodeResponse } from '../definitions/ListOfContinentsByCodeResponse'
import { ListOfCurrenciesByName } from '../definitions/ListOfCurrenciesByName'
import { ListOfCurrenciesByNameResponse } from '../definitions/ListOfCurrenciesByNameResponse'
import { ListOfCurrenciesByCode } from '../definitions/ListOfCurrenciesByCode'
import { ListOfCurrenciesByCodeResponse } from '../definitions/ListOfCurrenciesByCodeResponse'
import { CurrencyName } from '../definitions/CurrencyName'
import { CurrencyNameResponse } from '../definitions/CurrencyNameResponse'
import { ListOfCountryNamesByCode } from '../definitions/ListOfCountryNamesByCode'
import { ListOfCountryNamesByCodeResponse } from '../definitions/ListOfCountryNamesByCodeResponse'
import { ListOfCountryNamesByName } from '../definitions/ListOfCountryNamesByName'
import { ListOfCountryNamesByNameResponse } from '../definitions/ListOfCountryNamesByNameResponse'
import { ListOfCountryNamesGroupedByContinent } from '../definitions/ListOfCountryNamesGroupedByContinent'
import { ListOfCountryNamesGroupedByContinentResponse } from '../definitions/ListOfCountryNamesGroupedByContinentResponse'
import { CountryName } from '../definitions/CountryName'
import { CountryNameResponse } from '../definitions/CountryNameResponse'
import { CountryIsoCode } from '../definitions/CountryIsoCode'
import { CountryIsoCodeResponse } from '../definitions/CountryIsoCodeResponse'
import { CapitalCity } from '../definitions/CapitalCity'
import { CapitalCityResponse } from '../definitions/CapitalCityResponse'
import { CountryCurrency } from '../definitions/CountryCurrency'
import { CountryCurrencyResponse } from '../definitions/CountryCurrencyResponse'
import { CountryFlag } from '../definitions/CountryFlag'
import { CountryFlagResponse } from '../definitions/CountryFlagResponse'
import { CountryIntPhoneCode } from '../definitions/CountryIntPhoneCode'
import { CountryIntPhoneCodeResponse } from '../definitions/CountryIntPhoneCodeResponse'
import { FullCountryInfo } from '../definitions/FullCountryInfo'
import { FullCountryInfoResponse } from '../definitions/FullCountryInfoResponse'
import { FullCountryInfoAllCountries } from '../definitions/FullCountryInfoAllCountries'
import { FullCountryInfoAllCountriesResponse } from '../definitions/FullCountryInfoAllCountriesResponse'
import { CountriesUsingCurrency } from '../definitions/CountriesUsingCurrency'
import { CountriesUsingCurrencyResponse } from '../definitions/CountriesUsingCurrencyResponse'
import { ListOfLanguagesByName } from '../definitions/ListOfLanguagesByName'
import { ListOfLanguagesByNameResponse } from '../definitions/ListOfLanguagesByNameResponse'
import { ListOfLanguagesByCode } from '../definitions/ListOfLanguagesByCode'
import { ListOfLanguagesByCodeResponse } from '../definitions/ListOfLanguagesByCodeResponse'
import { LanguageName } from '../definitions/LanguageName'
import { LanguageNameResponse } from '../definitions/LanguageNameResponse'
import { LanguageIsoCode } from '../definitions/LanguageIsoCode'
import { LanguageIsoCodeResponse } from '../definitions/LanguageIsoCodeResponse'

export interface CountryInfoServiceSoap {
    ListOfContinentsByName(
        listOfContinentsByName: ListOfContinentsByName,
        callback: (
            err: any,
            result: ListOfContinentsByNameResponse,
            soapHeader: { [k: string]: any },
            httpHeader: any,
            soapResponse: any,
            rawResponse: any,
            rawRequest: any,
            mtomAttachments: any,
        ) => any,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): void
    ListOfContinentsByCode(
        listOfContinentsByCode: ListOfContinentsByCode,
        callback: (
            err: any,
            result: ListOfContinentsByCodeResponse,
            soapHeader: { [k: string]: any },
            httpHeader: any,
            soapResponse: any,
            rawResponse: any,
            rawRequest: any,
            mtomAttachments: any,
        ) => any,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): void
    ListOfCurrenciesByName(
        listOfCurrenciesByName: ListOfCurrenciesByName,
        callback: (
            err: any,
            result: ListOfCurrenciesByNameResponse,
            soapHeader: { [k: string]: any },
            httpHeader: any,
            soapResponse: any,
            rawResponse: any,
            rawRequest: any,
            mtomAttachments: any,
        ) => any,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): void
    ListOfCurrenciesByCode(
        listOfCurrenciesByCode: ListOfCurrenciesByCode,
        callback: (
            err: any,
            result: ListOfCurrenciesByCodeResponse,
            soapHeader: { [k: string]: any },
            httpHeader: any,
            soapResponse: any,
            rawResponse: any,
            rawRequest: any,
            mtomAttachments: any,
        ) => any,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): void
    CurrencyName(
        currencyName: CurrencyName,
        callback: (
            err: any,
            result: CurrencyNameResponse,
            soapHeader: { [k: string]: any },
            httpHeader: any,
            soapResponse: any,
            rawResponse: any,
            rawRequest: any,
            mtomAttachments: any,
        ) => any,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): void
    ListOfCountryNamesByCode(
        listOfCountryNamesByCode: ListOfCountryNamesByCode,
        callback: (
            err: any,
            result: ListOfCountryNamesByCodeResponse,
            soapHeader: { [k: string]: any },
            httpHeader: any,
            soapResponse: any,
            rawResponse: any,
            rawRequest: any,
            mtomAttachments: any,
        ) => any,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): void
    ListOfCountryNamesByName(
        listOfCountryNamesByName: ListOfCountryNamesByName,
        callback: (
            err: any,
            result: ListOfCountryNamesByNameResponse,
            soapHeader: { [k: string]: any },
            httpHeader: any,
            soapResponse: any,
            rawResponse: any,
            rawRequest: any,
            mtomAttachments: any,
        ) => any,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): void
    ListOfCountryNamesGroupedByContinent(
        listOfCountryNamesGroupedByContinent: ListOfCountryNamesGroupedByContinent,
        callback: (
            err: any,
            result: ListOfCountryNamesGroupedByContinentResponse,
            soapHeader: { [k: string]: any },
            httpHeader: any,
            soapResponse: any,
            rawResponse: any,
            rawRequest: any,
            mtomAttachments: any,
        ) => any,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): void
    CountryName(
        countryName: CountryName,
        callback: (
            err: any,
            result: CountryNameResponse,
            soapHeader: { [k: string]: any },
            httpHeader: any,
            soapResponse: any,
            rawResponse: any,
            rawRequest: any,
            mtomAttachments: any,
        ) => any,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): void
    CountryISOCode(
        countryIsoCode: CountryIsoCode,
        callback: (
            err: any,
            result: CountryIsoCodeResponse,
            soapHeader: { [k: string]: any },
            httpHeader: any,
            soapResponse: any,
            rawResponse: any,
            rawRequest: any,
            mtomAttachments: any,
        ) => any,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): void
    CapitalCity(
        capitalCity: CapitalCity,
        callback: (
            err: any,
            result: CapitalCityResponse,
            soapHeader: { [k: string]: any },
            httpHeader: any,
            soapResponse: any,
            rawResponse: any,
            rawRequest: any,
            mtomAttachments: any,
        ) => any,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): void
    CountryCurrency(
        countryCurrency: CountryCurrency,
        callback: (
            err: any,
            result: CountryCurrencyResponse,
            soapHeader: { [k: string]: any },
            httpHeader: any,
            soapResponse: any,
            rawResponse: any,
            rawRequest: any,
            mtomAttachments: any,
        ) => any,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): void
    CountryFlag(
        countryFlag: CountryFlag,
        callback: (
            err: any,
            result: CountryFlagResponse,
            soapHeader: { [k: string]: any },
            httpHeader: any,
            soapResponse: any,
            rawResponse: any,
            rawRequest: any,
            mtomAttachments: any,
        ) => any,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): void
    CountryIntPhoneCode(
        countryIntPhoneCode: CountryIntPhoneCode,
        callback: (
            err: any,
            result: CountryIntPhoneCodeResponse,
            soapHeader: { [k: string]: any },
            httpHeader: any,
            soapResponse: any,
            rawResponse: any,
            rawRequest: any,
            mtomAttachments: any,
        ) => any,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): void
    FullCountryInfo(
        fullCountryInfo: FullCountryInfo,
        callback: (
            err: any,
            result: FullCountryInfoResponse,
            soapHeader: { [k: string]: any },
            httpHeader: any,
            soapResponse: any,
            rawResponse: any,
            rawRequest: any,
            mtomAttachments: any,
        ) => any,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): void
    FullCountryInfoAllCountries(
        fullCountryInfoAllCountries: FullCountryInfoAllCountries,
        callback: (
            err: any,
            result: FullCountryInfoAllCountriesResponse,
            soapHeader: { [k: string]: any },
            httpHeader: any,
            soapResponse: any,
            rawResponse: any,
            rawRequest: any,
            mtomAttachments: any,
        ) => any,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): void
    CountriesUsingCurrency(
        countriesUsingCurrency: CountriesUsingCurrency,
        callback: (
            err: any,
            result: CountriesUsingCurrencyResponse,
            soapHeader: { [k: string]: any },
            httpHeader: any,
            soapResponse: any,
            rawResponse: any,
            rawRequest: any,
            mtomAttachments: any,
        ) => any,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): void
    ListOfLanguagesByName(
        listOfLanguagesByName: ListOfLanguagesByName,
        callback: (
            err: any,
            result: ListOfLanguagesByNameResponse,
            soapHeader: { [k: string]: any },
            httpHeader: any,
            soapResponse: any,
            rawResponse: any,
            rawRequest: any,
            mtomAttachments: any,
        ) => any,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): void
    ListOfLanguagesByCode(
        listOfLanguagesByCode: ListOfLanguagesByCode,
        callback: (
            err: any,
            result: ListOfLanguagesByCodeResponse,
            soapHeader: { [k: string]: any },
            httpHeader: any,
            soapResponse: any,
            rawResponse: any,
            rawRequest: any,
            mtomAttachments: any,
        ) => any,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): void
    LanguageName(
        languageName: LanguageName,
        callback: (
            err: any,
            result: LanguageNameResponse,
            soapHeader: { [k: string]: any },
            httpHeader: any,
            soapResponse: any,
            rawResponse: any,
            rawRequest: any,
            mtomAttachments: any,
        ) => any,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): void
    LanguageISOCode(
        languageIsoCode: LanguageIsoCode,
        callback: (
            err: any,
            result: LanguageIsoCodeResponse,
            soapHeader: { [k: string]: any },
            httpHeader: any,
            soapResponse: any,
            rawResponse: any,
            rawRequest: any,
            mtomAttachments: any,
        ) => any,
        options?: any,
        extraHeaders?: { [k: string]: any },
    ): void
}
