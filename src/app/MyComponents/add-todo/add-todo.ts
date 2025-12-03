import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoList } from '../../TodoList';

@Component({
  selector: 'app-add-todo',
  imports: [FormsModule],
  templateUrl: './add-todo.html',
  styleUrl: './add-todo.css',
})
export class AddTodo {
  @Output() todoAdd: EventEmitter<TodoList> = new EventEmitter();
  title!: string;
  desc!: string;

  onSubmit() {
    const todo: TodoList = {
      id: Date.now(),
      title: this.title,
      desc: this.desc,
      completed: true,
    };
    // console.log('Title:', this.title);
    // console.log('Description:', this.desc);
    this.todoAdd.emit(todo);
  }
}
