import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/components/notification/service/notification.service';
import { Bookmark } from '../../model/bookmark.model';
import { BookmarkService } from '../../service/bookmark.service';

@Component({
  selector: 'edit-bookmark',
  templateUrl: './edit-bookmark.component.html',
  styleUrls: ['./edit-bookmark.component.scss'],
})
export class EditBookmarkComponent implements OnInit {
  bookmark: Bookmark;

  constructor(
    private bookmarkService: BookmarkService,
    private route: ActivatedRoute,
    private router : Router,
    private notificationService : NotificationService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap:ParamMap)=>{
      const idParam = paramMap.get('id')
      this.bookmark = this.bookmarkService.getBookMark(idParam);
    });
  }
  onFormSubmit(form) {
    const {name , url } = form.value
    this.bookmarkService.updateBookMark(this.bookmark.id ,{
      name , url : new URL(url)
    })
    this.notificationService.show('Bookmark Updated!')
   this.router.navigateByUrl('/bookmarks')
  }

  delete(){
    this.bookmarkService.deleteBookMark(this.bookmark.id)
    this.router.navigateByUrl('/bookmarks')
    this.notificationService.show('Bookmark Deleted!')


  }
}
