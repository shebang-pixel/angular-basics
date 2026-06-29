import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoResponse } from '../../../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private http = inject(HttpClient);
  private todoEndpoint = "https://dummyjson.com/todos";

  getTodos(): Observable<TodoResponse> {
    return this.http.get<TodoResponse>(this.todoEndpoint);
  }
}
