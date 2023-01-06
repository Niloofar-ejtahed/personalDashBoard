import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/components/notification/service/notification.service';
import { Todo } from '../../model/todo.model';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  showValidationError:boolean

  constructor(private todoservice:TodoService , private router:Router
    , private notificationService : NotificationService) { }

  ngOnInit(): void {
  }

  onFormSubmit(form : NgForm){
    if(form.invalid) return this.showValidationError=true

      const todo = new Todo(form.value.text)
      this.todoservice.addTodo(todo)
      this.notificationService.show('Created Todo!')
      this.router.navigateByUrl('/todos')
  }
}
