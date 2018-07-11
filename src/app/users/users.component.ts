import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  events=[];
  constructor(private _eventService: EventService,private _router: Router) { }

  ngOnInit() {
    this._eventService.getUsers().subscribe(
      res => { this.events=res
                console.log(res);
                },
      err =>{
        if(err instanceof HttpErrorResponse){
          if(err.status === 401){
            this._router.navigate(['login'])
          }
        }
      }
    )
  }

}
