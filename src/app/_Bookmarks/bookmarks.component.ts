import { Component, OnInit } from '@angular/core';
import { Bookmark } from './model/bookmark.model';
import { BookmarkService } from './service/bookmark.service';

@Component({
  selector: 'bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.scss']
})
export class BookmarksComponent implements OnInit {

  bookMarks : Bookmark[]

  constructor( private bookMarkService : BookmarkService) { }

  ngOnInit(): void {

    this.bookMarks = this.bookMarkService.getBookMarks()
  }

}
