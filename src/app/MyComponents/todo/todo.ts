import { Component } from '@angular/core';
import { TodoList } from '../../TodoList';
import { CommonModule } from '@angular/common';
import { TodoItems } from '../todo-items/todo-items';
import { AddTodo } from '../add-todo/add-todo';

@Component({
  selector: 'app-todo',
  imports: [CommonModule, TodoItems, AddTodo],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {
  todos: TodoList[] = [];
  localItem!: string | null;

  constructor() {
    if (typeof window !== 'undefined') {
      this.localItem = localStorage.getItem('todos');
      if (this.localItem == null) {
        this.todos = [];
      } else {
        this.todos = JSON.parse(this.localItem);
      }
    }
  }

  deleteTodo(todo: TodoList) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem('todos', JSON.stringify(this.todos));
    // console.log('Deleted todo item:', index);
  }
  addTodo(todo: TodoList) {
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
