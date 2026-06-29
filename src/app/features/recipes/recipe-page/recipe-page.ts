import { Component, computed, inject, signal } from '@angular/core';
import { Recipe } from '../../../core/models/recipe.model';
import { RecipeService } from '../../../core/services/recipe-service/recipe-service';
import { RecipeItem } from '../recipe-item/recipe-item';
import { RecipeForn } from '../recipe-forn/recipe-forn';

@Component({
  standalone: true,
  selector: 'app-recipe-page',
  imports: [RecipeItem, RecipeForn],
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
          this.error.set("Failed to load Recipes.Check your internet Connection.");
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

  onRecipeAdded(title: string) {
    this.recipes.update(recipes => [
      ...recipes,
      {
        name: title,
      }
    ])
  }
}
