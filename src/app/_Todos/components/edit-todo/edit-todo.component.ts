import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/components/notification/service/notification.service';
import { Todo } from '../../model/todo.model';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss'],
})
export class EditTodoComponent implements OnInit {
  id: string;
  todo: Todo;

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router,
    private notificationService : NotificationService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.todo = this.todoService.getTodo(this.id);
  }

  onFormSubmit(form: NgForm) {
    this.todoService.updateTodo(this.id, form.value);
    this.notificationService.show('Todo Updated!')
    this.router.navigateByUrl('/todos');
  }
}
