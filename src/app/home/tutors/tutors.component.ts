import { Component, OnInit } from '@angular/core';
import { ProfModel } from 'src/app/shared/model/profSearch';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import {LocalStorageService} from 'ngx-localstorage';



@Component({
  selector: 'app-tutors',
  templateUrl: './tutors.component.html',
  styleUrls: ['./tutors.component.css']
})
export class TutorsComponent implements OnInit {
  profsLength :number= 0;
  profs: Array<ProfModel> =[];
  constructor(private http: HttpClient,  private _storageService: LocalStorageService, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        console.log(params.subject); // subject
        this.searchTutors(params.subject);
      }
      );
  }

  searchTutors(subject :String) {
    let url = 'http://localhost:8080/prof/search?subject=';
    const headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('authorization', 'Bearer '+ this.getToken());
 
    this.http.get<any>(url + subject, {'headers': headers})
    .subscribe({
      next: data => {
        this.profs = data
        this.profsLength =  this.profs.length
      },
      error: error => {
        console.error('There was an error!', error);
      }
    });
  }

  getToken(){
    return this._storageService.get("token");
  }

}