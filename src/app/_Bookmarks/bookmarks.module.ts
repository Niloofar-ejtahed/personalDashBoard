import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarksComponent } from './bookmarks.component';
import { AddBookmarkComponent } from './components/add-bookmark/add-bookmark.component';
import { EditBookmarkComponent } from './components/edit-bookmark/edit-bookmark.component';
import { BookmarkTileComponent } from './components/bookmark-tile/bookmark-tile.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ManageBookmarksComponent } from './components/manage-bookmarks/manage-bookmarks.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [ BookmarksComponent , AddBookmarkComponent , EditBookmarkComponent , BookmarkTileComponent ,ManageBookmarksComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ]
})
export class BookmarksModule { }
