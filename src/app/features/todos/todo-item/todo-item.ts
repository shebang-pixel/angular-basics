import { Component, input, output } from '@angular/core';
import { Todo } from '../../../core/models/todo.model';

@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css',
})
export class TodoItem {
  todo = input.required<Todo>();
  deleteClicked = output<number>();
  add = output<Todo>();

  emitTodo() {
    this.deleteClicked.emit(this.todo().id);
  }

}
