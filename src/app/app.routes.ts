import { Routes } from '@angular/router';
import { RecipePage } from './features/recipes/recipe-page/recipe-page';
import { UserPage } from './features/users/user-page/user-page';
import { ProductPage } from './features/products/product-page/product-page';
import { TodoPage } from './features/todos/todo-page/todo-page';
import { QuotePage } from './features/quotes/quote-page/quote-page';
import { MoviePage } from './features/movies/movie-page/movie-page';
import { WeatherPage } from './features/weather/weather-page/weather-page';
import { HomePage } from './features/home/home-page/home-page';

export const routes: Routes = [
    {
        path: '',
        component: HomePage
    },
    {
        path: 'recipes',
        component: RecipePage,
    },
    {
        path: 'users',
        component: UserPage
    },
    {
        path: 'products',
        component: ProductPage
    },
    {
        path: 'weather',
        component: WeatherPage
    },
    {
        path: 'quotes',
        component: QuotePage
    },
    {
        path: 'todos',
        component: TodoPage
    },
    {
        path: 'movies',
        component: MoviePage
    }

];
