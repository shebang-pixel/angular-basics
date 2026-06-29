import { Component, inject, signal } from '@angular/core';
import { TodoService } from '../../../core/services/todo-service/todo/todo-service';
import { Todo } from '../../../core/models/todo.model';
import { TodoItem } from '../todo-item/todo-item';

@Component({
  selector: 'app-todo-page',
  imports: [TodoItem],
  templateUrl: './todo-page.html',
  styleUrl: './todo-page.css',
})
export class TodoPage {
  // todoService
  todoService = inject(TodoService);
  // page states
  todos = signal<Todo[]>([]);
  loading = signal(true);
  error = signal('');

  ngOnInit() {
    this.todoService
      .getTodos()
      .subscribe({
        next: data => {
          this.todos.set(data.todos)
          this.loading.set(false)
        },
        error: err => {
          this.error.set("Unable to get Todos:")
          this.loading.set(false)
        }
      })
  }

  // delete todo
  deleteTodo(id: number) {
    this.todos.update(
      todos => todos.filter(
        todo => {
          return todo.id !== id
        }
      )
    );
  }

}
