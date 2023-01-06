import { Component, OnInit } from '@angular/core';
import { Todo } from './model/todo.model';
import { TodoService } from './service/todo.service';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

todos: Todo[]
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todos= this.todoService.getTodos()
  }
  toggleCompleted(todo : Todo){
    this.todoService.updateTodo(todo.id , {completed : !todo.completed})
  }
}
