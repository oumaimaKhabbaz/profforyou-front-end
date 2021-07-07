import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.css']
})
export class SearchformComponent implements OnInit {

  subject= new FormControl('');

  constructor(private http: HttpClient) { }
   
  ngOnInit(): void {
  }

  search() {
    console.log("button is clicked")
    return this.http.get<any>("http://localhost:8080/search?subject="+this.subject.value)
      .subscribe({
        next: data => {

        },
        error: error => {
          console.error('There was an error!', error);
        }
      });
}
}
