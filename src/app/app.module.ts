import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesModule } from './_Notes/notes.module';
import { BookmarksModule } from './_Bookmarks/bookmarks.module';
import { TodosModule } from './_Todos/todos.module';
import { FormsModule } from '@angular/forms';
import { NotificationComponent } from './shared/components/notification/notification.component';
import { TabsComponent } from './shared/components/_Tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    NotificationComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NotesModule,
    BookmarksModule,
    TodosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
