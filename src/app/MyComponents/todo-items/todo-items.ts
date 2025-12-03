import { TodoList } from './../../TodoList';
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-todo-items',
  imports: [],
  templateUrl: './todo-items.html',
  styleUrl: './todo-items.css',
})
export class TodoItems {
  @Input() todoItem: TodoList = new TodoList();
  @Output() todoDelete: EventEmitter<TodoList> = new EventEmitter();

  DeleteTodo(todoItem: TodoList) {
    this.todoDelete.emit(todoItem);
    // console.log('Delete todo item:', todoItem);
  }
}
