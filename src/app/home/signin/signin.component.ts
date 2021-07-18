import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  email = new FormControl('');// dataBinding // one way binding
  password = new FormControl('');



  constructor(private http: HttpClient) { }


  ngOnInit(): void {
  }


  logEmailAndPassword() {
    console.log(this.email.value + " " + this.password.value)

  }


  createUser() {
    console.log("button is clicked")
    return this.http.post<any>("http://localhost:8080/users", {
      "email": this.email.value, "password": this.password.value

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
  ;
}
  }

  

