import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  text = new FormControl('');

  email = new FormControl('', [
    Validators.required,
    Validators.pattern("[^@]@[^@]")
   ]);// dataBinding // one way binding


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  logEmail() {
    console.log(this.text.value)

}
sent = false;
}

