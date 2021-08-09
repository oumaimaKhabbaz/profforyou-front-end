import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';


import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  
  constructor(private http: HttpClient,
    private router: Router, private dialog: MatDialog, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
  }

  ngOnInit(): void {

  }

  createUser() {
    const url =  "http://localhost:8080/users";
    if (this.form.valid) {
      console.log('form submitted');
      return this.http.post<any>( url, {
        "email": this.form.get('email')?.value, "password": this.form.get('password')?.value,
        "firstname": this.form.get('firstName')?.value, "lastname": this.form.get('lastName')?.value
      })
        .subscribe({
          next: data => {
            console.log(data.id)
            if (data.id != null) {
              this.router.navigate(['signin'])
              this.closeDialog();
            }else{
              console.error('Accoutnt was not correctly created!');
            }
          },
          error: error => {
            console.error('There was an error!', error);
          }
        });
    } else {
      this.validateAllFormFields(this.form);
      return false;
    }

  }
 

  closeDialog() {
    const dialogRef = this.dialog.getDialogById('mat-dialog-0');
    dialogRef?.close();
  }

  isFieldValid(field: string) {
    if (!this.form.get(field)?.valid && this.form.get(field)?.touched) return true;
    else return false;
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }

  validateAllFormFields(formGroup: FormGroup) {         
    Object.keys(formGroup.controls).forEach(field => {  
      const control = formGroup.get(field);             
      if (control instanceof FormControl) {             
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {        
        this.validateAllFormFields(control);            
      }
    });
  }


}
