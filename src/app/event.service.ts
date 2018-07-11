import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _eventUrl="http://localhost:3000/api/events";
  private _userUrl="http://localhost:3000/api/users";

  constructor(private http: HttpClient) { }

  getEvents(){
    return this.http.get<any>(this._eventUrl,{headers:new HttpHeaders().set('Content-Type','application/json').set('auth',localStorage.getItem('token'))});

  }

  getUsers(){
    return this.http.get<any>(this._userUrl,{headers:new HttpHeaders().set('Content-Type','application/json').set('auth',localStorage.getItem('token'))});

    }
}
