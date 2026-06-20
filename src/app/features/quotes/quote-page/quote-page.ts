import { Component, signal, inject } from '@angular/core';
import { QuoteModel } from '../../quotes.model';
import { QuoteService } from '../../../core/quote';
import { QuoteItem } from '../quote-item/quote-item';

@Component({
  standalone: true,
  selector: 'app-quote-page',
  imports: [QuoteItem],
  templateUrl: './quote-page.html',
  styleUrl: './quote-page.css',
})
export class QuotePage {

  // Page states
  quotes = signal<QuoteModel[]>([]);
  loading = signal(true);
  error = signal('');
  quoteService = inject(QuoteService);

  // Fetch data
  ngOnInit() {
    this.quoteService
      .getQuotes()
      .subscribe({
        next: (data) => {
          console.log('Api response', data);

          this.quotes.set(data.quotes)
          this.loading.set(false);




        },
        error: err => {
          this.error.set('Unable tofetch Quotes...');
          this.loading.set(false);
        }
      })

  }



}
