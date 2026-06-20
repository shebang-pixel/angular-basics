import { Routes } from '@angular/router';
import { RecipePage } from './features/recipes/recipe-page/recipe-page';

export const routes: Routes = [
    {
        path: 'recipes',
        component: RecipePage,
    },
];
