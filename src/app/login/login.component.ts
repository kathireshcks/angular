import { Component, OnInit } from '@angular/core';
import{ Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData={}
  constructor(private _auth:AuthService,private _router:Router) { }

  ngOnInit() {
  }

  

  loginUser(){
    console.log(this.loginUserData);
    this._auth.loginUser(this.loginUserData).subscribe(
      res => {
        
        
        localStorage.setItem('token',res.token);
        /*let tokenInfo = this.getDecodedAccessToken(token); // decode token
        let expireDate = tokenInfo.exp; // get token expiration dateTime
        console.log(tokenInfo); // show decoded token object in console
        */
        this._router.navigate(['events'])
      },
      err =>console.log(err)
    )
  }

}
