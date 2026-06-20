import { Component, Input } from '@angular/core';
import { QuoteModel } from '../../quotes.model';

@Component({
  standalone: true,
  selector: 'app-quote-item',
  imports: [],
  templateUrl: './quote-item.html',
  styleUrl: './quote-item.css',
})
export class QuoteItem {
  @Input({ required: true })
  quote!: QuoteModel;
}
