import { animate, query, style, transition, trigger } from '@angular/animations';
import { Component , HostBinding, OnInit } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';
import { map, Observable, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // animations: [
  //   trigger('routeAnim', [
  //     transition( '* => *',[
  //       query(':leave', [
  //         animate(1000 ,style({
  //           opacity:0
  //         }) )
  //       ],{optional :true}),

  //       query(':enter',[
  //         style({
  //           opacity:0,
  //           display:'block',
  //           height:'100%'
  //         }),
  //         animate(1000 , style({
  //           opacity:1
  //         }))
  //       ] ,{optional: true})
  //       ])
  //     ])
  //   ]
  })


export class AppComponent  implements OnInit{


  dateTime: Observable<Date>;

  constructor(private contexts: ChildrenOutletContexts){}

ngOnInit(): void {
  this.dateTime = timer(0,1000).pipe(
    map(()=>{
      return new Date
    })
  )
  // timer(0 , 1000).subscribe(()=>{
  //     this.dateTime = Date.now();
  //   })
}

  prepareRoute () {
    // if (outlet.isActivated) return  outlet.activatedRoute.snapshot.url;
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];

  }
}



// constructor(private contexts: ChildrenOutletContexts) {}

// getRouteAnimationData() {
//   return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
// }
