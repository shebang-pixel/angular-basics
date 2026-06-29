import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeResponse } from '../../models/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private http = inject(HttpClient);

  getRecipe(): Observable<RecipeResponse> {
    return this.http.get<RecipeResponse>(
      'https://dummyjson.com/recipes'
    )
  }
}
