import { Component, input, output } from '@angular/core';
import { Recipe } from '../../../core/models/recipe.model';

@Component({
  selector: 'app-recipe-item',
  imports: [],
  templateUrl: './recipe-item.html',
  styleUrl: './recipe-item.css',
})
export class RecipeItem {
  recipe = input.required<Recipe>();

  deleteClicked = output<number>();
  // emit clicked item
  onDelete() {
    this.deleteClicked.emit(this.recipe().id!);
  }
}
