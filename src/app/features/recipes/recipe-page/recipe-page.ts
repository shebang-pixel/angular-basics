import { Component, computed, inject, signal } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../../core/services/recipe-service';
import { RecipeItem } from '../recipe-item/recipe-item';

@Component({
  standalone: true,
  selector: 'app-recipe-page',
  imports: [RecipeItem],
  templateUrl: './recipe-page.html',
  styleUrl: './recipe-page.css',
})
export class RecipePage {
  private recipeService = inject(RecipeService);
  recipes = signal<Recipe[]>([]);
  loading = signal(true);
  error = signal('');
  // derive state
  recipeCount = computed(
    () => this.recipes().length
  );

  ngOnInit() {
    this.recipeService
      .getRecipe()
      .subscribe({
        next: data => {
          this.recipes.set(data.recipes);
          console.log(data);
          this.loading.set(false);
        },
        error: err => {
          this.error.set(err);
          this.loading.set(false);
        }
      })
  }

  deleteRecipe(id: number) {
    this.recipes.update(
      recipes => recipes.filter(
        recipe => recipe.id !== id
      )
    )
    console.log(`Remove recipe number ${id}`)
  }
}
