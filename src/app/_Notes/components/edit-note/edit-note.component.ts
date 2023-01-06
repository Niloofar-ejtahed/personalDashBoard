import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/components/notification/service/notification.service';
import { Note } from '../../model/note.model';
import { NoteService } from '../../service/note.service';

@Component({
  selector: 'edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {

  note : Note
  constructor(private route:ActivatedRoute , private noteService:NoteService , private router:Router ,
    private notificationService : NotificationService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap:ParamMap)=>{
      const idParam = paramMap.get('id')
      this.note = this.noteService.getNote(idParam)
    });

  }
  onFormSubmit(form : NgForm){
    this.noteService.updateNote(this.note.id , form.value)
    this.notificationService.show('Note Updated!')
    this.router.navigateByUrl('/notes')
  }
  onDelete(){
    this.noteService.deleteNote(this.note.id)
    this.notificationService.show('Note Deleted!')
    this.router.navigateByUrl('/notes')

  }
}
