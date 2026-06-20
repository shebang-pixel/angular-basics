import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { QuoteModel, QuotesResponse } from '../features/quotes.model';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  private http = inject(HttpClient);

  getQuotes() {
    return this.http.get<QuotesResponse>(
      'https://dummyjson.com/quotes'
    );
  }

}
