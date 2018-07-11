import { Component, OnInit } from '@angular/core';
import { trigger, style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
//import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css'],
  animations:[

    trigger('goals',[
      transition('* => *',[
        query(':enter',style({ opacity:0 }),{optional:true}),
        query(':enter',stagger('300ms',[
          animate('.6s ease-in',keyframes([
            style({opacity:0 ,transform:'translateY(-75%)',offset:0}),
            style({opacity:.5 ,transform:'translateY(35px)',offset:.3}),
            style({opacity:1 ,transform:'translateY(0)',offset:1})
          ]))       
        ]),{optional:true}),

        query(':leave',stagger('300ms',[
          animate('.6s ease-in',keyframes([
            style({opacity:1 ,transform:'translateY(0)',offset:0}),
            style({opacity:.5 ,transform:'translateY(35px)',offset:.3}),
            style({opacity:0 ,transform:'translateY(-75%)',offset:1})
          ]))       
        ]),{optional:true})
      ])
    ])
  ]
})


// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }

export class SpecialEventsComponent implements OnInit {

  itemCount: number;
  goalText:string;
  goals=["kathir","kokila","kkkkk"];
  constructor() { }

  ngOnInit() {
    this.itemCount=this.goals.length;
  }

  addItem(){
    this.goals.push(this.goalText);
    this.goalText='';
    this.itemCount=this.goals.length;
  }
  removeItem(i){
    this.goals.splice(i,1);
    this.itemCount=this.goals.length;
  }

  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }

    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  // isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
  //   const isSubmitted = form && form.submitted;
  //   return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  // }
}
