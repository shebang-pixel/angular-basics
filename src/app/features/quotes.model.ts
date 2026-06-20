export interface QuoteModel {
    id: number;
    quote: string;
    author: string;
}

export interface QuotesResponse {
    quotes: QuoteModel[];
    total: number;
    skip: number;
    limit: number;
}