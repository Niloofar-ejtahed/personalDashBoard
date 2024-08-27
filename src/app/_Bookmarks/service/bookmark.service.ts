import { Injectable, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { Bookmark } from '../model/bookmark.model';

@Injectable({
  providedIn: 'root',
})
export class BookmarkService implements OnDestroy {
  bookMarks: Bookmark[] = [];
  storageListenSub: Subscription;


  constructor() {
    this.loadState()
    this.storageListenSub = fromEvent(window, 'storage').subscribe((event : StorageEvent) => {
      if(event.key === 'Bookmarks'){
        this.loadState()
      }
    })
  }

  ngOnDestroy(): void {
    if(this.storageListenSub) this.storageListenSub.unsubscribe()
   }

  getBookMarks() {
    return this.bookMarks;
  }

  getBookMark(id: string) {
    return this.bookMarks.find((b) => b.id === id);
  }

  addBookMark(bookmark : Bookmark){
    this.bookMarks.push(bookmark)
    this.saveState()
  }

  updateBookMark(id : string , updatedFileds : Partial<Bookmark>) {
   const bookMark = this.getBookMark(id);
    Object.assign(bookMark , updatedFileds)
    this.saveState()

  }

  deleteBookMark(id : string){
const bookMarkIndex = this.bookMarks.findIndex(b=> b.id === id)
if(bookMarkIndex == -1)return
this.bookMarks.splice(bookMarkIndex , 1)
this.saveState()

}

saveState(){
  localStorage.setItem("Bookmarks" ,JSON.stringify( this.bookMarks))
 }

 loadState(){
   try {
     const bookmarksInStorage = JSON.parse(localStorage.getItem("Bookmarks"))
     if(!bookmarksInStorage) return
     this.bookMarks.length = 0;
     this.bookMarks.push(...bookmarksInStorage);
   } catch (error) {
     console.log(error)
   }
 }
}
