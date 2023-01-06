import { Component, Input, OnInit } from '@angular/core';
import { Bookmark } from '../../model/bookmark.model';

@Component({
  selector: 'bookmark-tile',
  templateUrl: './bookmark-tile.component.html',
  styleUrls: ['./bookmark-tile.component.scss']
})
export class BookmarkTileComponent implements OnInit {

  @Input() bookMark: Bookmark;
  tileIconSrc : string;
  favIconError : boolean;

  constructor() { }

  ngOnInit(): void {
    this.tileIconSrc = this.bookMark.url.origin + '/favicon.ico'
  }

}
