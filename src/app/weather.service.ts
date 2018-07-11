import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
//import { map } from 'rxjs/add/operator/map';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  //private api="http://localhost:3000/api/chartdata";
  private api="https://samples.openweathermap.org/data/2.5/forecast/daily?q=chennai&appid=b1b15e88fa797225412429c1c50c122a1";

  constructor(private http:HttpClient) { }

  dailyForcast(){
    return this.http.get(this.api);
   //return this.http.get(this.api).map(result => result);
  }
}
