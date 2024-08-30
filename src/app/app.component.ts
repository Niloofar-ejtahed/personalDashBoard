import { animate, query, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding, OnInit } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';
import { map, Observable, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {

  dateTime: Observable<Date>;

  constructor(private contexts: ChildrenOutletContexts) { }

  ngOnInit(): void {
    this.dateTime = timer(0, 1000).pipe(
      map(() => {        return new Date
      })
    )
  }

  prepareRoute() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
