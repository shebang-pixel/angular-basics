import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuoteResponse } from '../../models/quote.model';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  private http = inject(HttpClient);
  private quoteEndpoint = "https://dummyjson.com/quotes"

  getQuotes(): Observable<QuoteResponse> {
    return this.http.get<QuoteResponse>(this.quoteEndpoint)
  }
}
