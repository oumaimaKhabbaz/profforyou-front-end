import { Component, OnInit, Inject } from '@angular/core';
import { FormControl,Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  username: string;
  name: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email = new FormControl('',[Validators.required,]);// dataBinding // one way binding
  password = new FormControl('');
  firstName = new FormControl('');
  lastName = new FormControl('');


  constructor(private http: HttpClient, 
    public dialogRef: MatDialogRef<SignupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }


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

  onNoClick(): void {
    this.dialogRef.close();
  }
}
