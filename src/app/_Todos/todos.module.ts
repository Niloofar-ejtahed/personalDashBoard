import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { TodosComponent } from './todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';



@NgModule({
  declarations: [TodosComponent,
    TodoItemComponent,
    AddTodoComponent,
    EditTodoComponent,],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ]
})
export class TodosModule { }
