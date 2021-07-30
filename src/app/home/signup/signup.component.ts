import { Component, OnInit } from '@angular/core';
import { FormControl,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email = new FormControl('',[Validators.required,
    Validators.pattern("[^@]*@[^@]*")
  ]);// dataBinding // one way binding
  password = new FormControl('', Validators.required);
  firstName = new FormControl('', Validators.required);
  lastName = new FormControl('', Validators.required);


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
    ;
  }
}
