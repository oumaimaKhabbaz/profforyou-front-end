import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  subscribeThreeMonths(){
    const url = 'http://localhost:8080/subscription?subscriptionType=&'
    this.http.post<any>( url + "profId="+1, {})
      .subscribe({
        next: data => {
          console.log(data.id)
          if (data.id != null) {
           
          }else{
            console.error('Accoutnt was not correctly created!');
          }
        },
        error: error => {
          console.error('There was an error!', error);
        }
      });

  }

  subscribeSixMonths(){
    const url = 'http://localhost:8080/subscription?subscriptionType=HALF_YEAR&';
    this.http.post<any>( url + "profId="+2, {})
      .subscribe({
        next: data => {
          console.log(data.id)
          if (data.id != null) {
           
          }else{
            console.error('Accoutnt was not correctly created!');
          }
        },
        error: error => {
          console.error('There was an error!', error);
        }
      });
  }

  subscribeOneYear(){
    const url = 'http://localhost:8080/subscription?subscriptionType=YEAR&';
    this.http.post<any>( url + "profId="+3, {})
      .subscribe({
        next: data => {
          console.log(data.id)
          if (data.id != null) {
           
          }else{
            console.error('Accoutnt was not correctly created!');
          }
        },
        error: error => {
          console.error('There was an error!', error);
        }
      });
  }

}
