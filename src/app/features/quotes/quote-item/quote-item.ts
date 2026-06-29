import { Component, output, input } from '@angular/core';
import { Quote } from '../../../core/models/quote.model';

@Component({
  selector: 'app-quote-item',
  imports: [],
  templateUrl: './quote-item.html',
  styleUrl: './quote-item.css',
})
export class QuoteItem {
  quote = input.required<Quote>();
  deleteClicked = output<number>();

  onDelete() {
    // console.log("Delete button clicked!");
    // console.log('Emmitting', this.quote().id);
    this.deleteClicked.emit(
      this.quote().id
    )
  }
}
