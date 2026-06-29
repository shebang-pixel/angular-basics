import { Component, input, output } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { FormField, validate } from '@angular/forms/signals';
import { Quote } from '../../../core/models/quote.model';

@Component({
  selector: 'app-quote-form',
  imports: [ReactiveFormsModule],
  templateUrl: './quote-form.html',
  styleUrl: './quote-form.css',
})
export class QuoteForm {
  quoteForm = new FormGroup({
    quote: new FormControl('', [
      Validators.required,
    ]),
    author: new FormControl('', [
      Validators.required
    ])
  })

  quoteCount = input.required<number>()

  // output
  quoteAdded = output<Quote>()

  onSubmit() {
    const quote: Quote = {
      id: this.quoteCount() + 1,
      quote: this.quoteForm.value.quote ?? '',
      author: this.quoteForm.value.author ?? '',
    };
    this.quoteAdded.emit(quote);
    this.quoteForm.reset();
  }
}
