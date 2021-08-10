import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpResponse } from '@angular/common/http';
import {LocalStorageService} from 'ngx-localstorage';
import { Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  email = new FormControl('', [Validators.required,
      Validators.pattern("[^@]@[^@]")
     ]);// dataBinding // one way binding
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8)
  ]);

  passwordIsForgotten: boolean = false;

  constructor(private http: HttpClient, 
    private _storageService: LocalStorageService,
    private router:Router) { } // http client


  ngOnInit(): void {
  }


  logEmailAndPassword() {
    console.log(this.email.value + " " + this.password.value)

  }

  login() {
    console.log("button is clicked")
    return this.http.post<any>("http://localhost:8080/login", {
      "email": this.email.value, "password": this.password.value
    }).subscribe({
      next: data => {
        console.log(data)
        if (data != null) {
          console.log(data);
          this._storageService.set('token', data.AUTHORIZATION);
          console.log(this._storageService.get('token'))
          this.router.navigate( ['home']);
        }else{
          console.error('Accoutnt was not correctly created!');
        }
      },
      error: error => {
        console.error('There was an error!', error);
      }
    });  
  }
  
  

  forgotPassword() {
    this.passwordIsForgotten = true;
  }
}