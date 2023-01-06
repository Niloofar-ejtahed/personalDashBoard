import { Component, Input, OnInit } from '@angular/core';
import { Bookmark } from '../../model/bookmark.model';
import { BookmarkService } from '../../service/bookmark.service';

@Component({
  selector: 'manage-bookmarks',
  templateUrl: './manage-bookmarks.component.html',
  styleUrls: ['./manage-bookmarks.component.scss']
})
export class ManageBookmarksComponent implements OnInit {

  bookMarks : Bookmark[]

  constructor(private bookmarkService : BookmarkService) { }

  ngOnInit(): void {
    this.bookMarks = this.bookmarkService.getBookMarks()
  }

}
