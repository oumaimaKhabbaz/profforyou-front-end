import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProfModule } from '../prof/prof.module';
import { ProfModel } from '../shared/model/profSearch';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  totalReviews:number =0;
  prof:any;

  constructor(private http: HttpClient) {
   
   }

  ngOnInit(): void {
    this.getProf();
    this.countReviews();
  }

  getProf(){
    const url = 'http://localhost:8080/prof?id=';
    this.http.get<any>( url +1, {})
      .subscribe({
        next: data => {
          console.log(data.id)
          if (data!= null) {
            this.prof = data
          }else{
            console.error('Prof was not found!');
          }
        },
        error: error => {
          console.error('There was an error!', error);
        }
      });
  }

  countReviews(){
    return this.totalReviews = this.prof.reviews.length;
  }

  calculteRate(){
    let rate =0;
   
  }

}
