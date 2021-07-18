import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email = new FormControl('',[Validators.required,]);// dataBinding // one way binding
  password= new FormControl('');
  firstName = new FormControl('');
  lastName =new FormControl('');

  form = new FormGroup({
   email: this.email,
   password: this.password,
   firstname: this.firstName,
   lastName: this.lastName
  })
  constructor(private http: HttpClient) { } 


  ngOnInit(): void {
  }


  logEmailAndPassword() {
    console.log(this.email.value + " " + this.password.value)

  }


  createUser() {
    console.log("button is clicked")
    return this.http.post<any>("http://localhost:8080/users", {
      "email": this.email.value, "password": this.password.value,
      "firstname": this.firstName.value, "lastname": this.lastName.value
    })
      .subscribe({
        next: data => {

        },
        error: error => {
          console.error('There was an error!', error);
        }
      });




  }
  handleError(method: string, message: string) {
    console.log(method + message)
    return Observable.throw(message);
    
  }
}
