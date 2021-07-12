import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  text = new FormControl('');

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  logEmail() {
    console.log(this.text.value)

}
}

