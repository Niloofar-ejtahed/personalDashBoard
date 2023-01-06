import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookmarkComponent } from './_Bookmarks/components/add-bookmark/add-bookmark.component';
import { AddNoteComponent } from './_Notes/components/add-note/add-note.component';
import { AddTodoComponent } from './_Todos/components/add-todo/add-todo.component';
import { BookmarksComponent } from './_Bookmarks/bookmarks.component';
import { EditBookmarkComponent } from './_Bookmarks/components/edit-bookmark/edit-bookmark.component';
import { EditNoteComponent } from './_Notes/components/edit-note/edit-note.component';
import { EditTodoComponent } from './_Todos/components/edit-todo/edit-todo.component';
import { ManageBookmarksComponent } from './_Bookmarks/components/manage-bookmarks/manage-bookmarks.component';
import { TodosComponent } from './_Todos/todos.component';
import { NotesComponent } from './_Notes/notes.component';

const routes: Routes = [
  { path: 'bookmarks' , component:BookmarksComponent , data:{ tab:1} },
  { path: 'bookmarks/add' , component:AddBookmarkComponent },
  { path: 'bookmarks/manage' , component:ManageBookmarksComponent ,children:[
    { path: ':id' , component:EditBookmarkComponent },
  ]},
  { path: 'todos' , component:TodosComponent , data:{ tab:2} },
  { path: 'todos/add' , component:AddTodoComponent },
  { path: 'todos/:id' , component:EditTodoComponent },
  { path: 'notes' , component:NotesComponent , data:{ tab:3} },
  { path: 'notes/add' , component:AddNoteComponent  },
  { path: 'notes/:id' , component:EditNoteComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
