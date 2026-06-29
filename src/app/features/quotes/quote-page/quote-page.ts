import { Component, computed, inject, signal } from '@angular/core';
import { Quote } from '../../../core/models/quote.model';
import { QuoteService } from '../../../core/services/quote-service/quote-service';
import { QuoteItem } from '../quote-item/quote-item';
import { QuoteForm } from '../quote-form/quote-form';

@Component({
  selector: 'app-quote-page',
  imports: [QuoteItem, QuoteForm],
  templateUrl: './quote-page.html',
  styleUrl: './quote-page.css',
})
export class QuotePage {
  // page state
  quotes = signal<Quote[]>([]);
  loading = signal(true);
  error = signal('');

  // inject quote service
  quoteService = inject(QuoteService);

  quoteCount = computed(
    () => this.quotes().length
  );

  // callquotes
  ngOnInit() {
    this.quoteService
      .getQuotes()
      .subscribe({
        next: data => {
          this.quotes.set(data.quotes);
          console.log(data);
          console.log(this.quotes())
          this.loading.set(false);
        },
        error: err => {
          this.error.set('Check your internet connnection and try again!');
          this.loading.set(false);
        }
      })
  }

  // add quote
  onQuoteAdded(quote: Quote) {
    this.quotes.update(quotes => [
      ...quotes,
      quote
    ]
    )
  }

  // delete quote
  onDeleteQuote(id: number) {
    this.quotes.update(
      quotes => quotes.filter(
        quote => quote.id !== id
      )
    );
  }


}
