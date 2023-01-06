import { Component, OnInit } from '@angular/core';
import { Note } from './model/note.model';
import { NoteService } from './service/note.service';

@Component({
  selector: 'notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})


export class NotesComponent implements OnInit {

  notes: Note[]

  constructor(private noteService : NoteService) { }

  ngOnInit(): void {
    this.notes = this.noteService.getNotes()
  }

}
