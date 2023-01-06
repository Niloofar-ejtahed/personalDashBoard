import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/components/notification/service/notification.service';
import { Note } from '../../model/note.model';
import { NoteService } from '../../service/note.service';

@Component({
  selector: 'add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {

  showValidationError:boolean;

  constructor(private noteService : NoteService , private router:Router,
    private notificationService : NotificationService) { }

  ngOnInit(): void {
  }
  onFormSubmit(form : NgForm){
    if(form.invalid) return this.showValidationError=true
      const note = new Note(form.value.title , form.value.content)
      this.noteService.addNote(note)
      this.notificationService.show('Created Note!')
      this.router.navigateByUrl("/notes")

  }

}
