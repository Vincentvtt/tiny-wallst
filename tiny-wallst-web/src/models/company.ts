import { Score } from "./score";

export interface Company {
    id: string;
    name: string;
    ticker_symbol: string;
    exchange_symbol: string;
    unique_symbol: string;
    date_generated: Date;
    security_name: string;
    exchange_country_iso: string;
    listing_currency_iso: string;
    canonical_url: string;
    unique_symbol_slug: string;
    score: Score
}