import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl="http://localhost:3000/api/register"
  private _loginUrl="http://localhost:3000/api/login"
  private _imageUrl="http://localhost:3000/api/imageupload"
  constructor(private http: HttpClient,private _router:Router) { }

  registerUser(user){
    return this.http.post<any>(this._registerUrl,user);
  }

  loginUser(user){
    return this.http.post<any>(this._loginUrl,user);
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  logoutUser(){
    localStorage.removeItem('token');
    this._router.navigate(['/special']);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  imageupload(caption: string , fileToUpload: File){
    const formData: FormData=new FormData();
    formData.append("Image",fileToUpload,fileToUpload.name);
    formData.append("ImageCaption",caption);
    console.log(formData);
    // const formData={
    //   "image":fileToUpload,
    //   "imagecaption":caption
    // }
    return this.http.post<any>(this._imageUrl,formData);
  }

  test(){
    const formData={
      "user":"jsdbf",
      "id":"dabf"
    }
    return this.http.post<any>(this._imageUrl,formData);
  }
}
