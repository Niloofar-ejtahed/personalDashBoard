import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/components/notification/service/notification.service';
import { Todo } from '../../model/todo.model';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor(private router: Router, private todoService: TodoService ,
    private notificationService : NotificationService) {}

  ngOnInit(): void {}

  onDeleteClick() {
    this.todoService.deleteTodo(this.todo.id);
    this.notificationService.show('Todo Deleted!')
    this.router.navigateByUrl('/todos');
  }
}
