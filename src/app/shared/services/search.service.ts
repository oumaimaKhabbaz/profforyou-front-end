import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfSearch } from '../model/profSearch';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  profs: Array<ProfSearch> = [];
  constructor(private http: HttpClient) { }

  search(subject: string) {
    console.log("button is clicked")
    return this.http.get<ProfSearch[]>("http://localhost:8080/search?subject=" + subject)
      .subscribe({
        next: data => {
          this.profs =data
          console.log(data)
        },
        error: error => {
          console.error('There was an error!', error);
        }
      });
  }
  GetSearchResult(subject: string){
    this.search(subject);
    return this.profs
  }
}
