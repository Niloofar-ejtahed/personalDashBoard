import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../../model/note.model';

@Component({
  selector: 'note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {

  @Input() note: Note
  constructor() { }

  ngOnInit(): void {
  }

}
