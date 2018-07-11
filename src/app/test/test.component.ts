import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  loginForm: FormGroup;
  returnUrl: string;

  username = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(100)
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6)
  ]);

  constructor(private auth: AuthService,
              private formBuilder: FormBuilder,
              private router: Router,
              
              private route: ActivatedRoute) { }

  ngOnInit() {
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
      this.loginForm = this.formBuilder.group({
      username: this.username,
      password: this.password
    });
  }

  setClassUsername() {
    return { 'has-error': !this.username.pristine && !this.username.valid };
  }

  setClassPassword() {
    return { 'has-error': !this.password.pristine && !this.password.valid };
  }

  // private fieldArray: Array<any> = [];
  //   private newAttribute: any = {};

  //   addFieldValue() {
  //       this.fieldArray.push(this.newAttribute)
  //       this.newAttribute = {};
  //   }

  //   deleteFieldValue(index) {
  //       this.fieldArray.splice(index, 1);
  //   }
  

}