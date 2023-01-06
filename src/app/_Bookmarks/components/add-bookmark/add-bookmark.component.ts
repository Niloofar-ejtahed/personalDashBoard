import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/components/notification/service/notification.service';
import { Bookmark } from '../../model/bookmark.model';
import { BookmarkService } from '../../service/bookmark.service';

@Component({
  selector: 'add-bookmark',
  templateUrl: './add-bookmark.component.html',
  styleUrls: ['./add-bookmark.component.scss']
})
export class AddBookmarkComponent implements OnInit {
  showValidationError:boolean;

  constructor(private bookmarkService : BookmarkService , private router :Router,
    private notificationService : NotificationService) { }

  ngOnInit(): void {
  }

  onFormSubmit(form : NgForm){
    const {name , url} = form.value
    const bookMark = new Bookmark(name ,url)
    this.bookmarkService.addBookMark(bookMark)
    this.notificationService.show('Created Bookmark!')
    this.router.navigateByUrl("/bookmarks")
  }
}
