 import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { SearchService } from 'src/app/shared/services/search.service';
import { ProfSearch } from 'src/app/shared/model/profSearch';


@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.css']
})
export class SearchformComponent implements OnInit {

  subject= new FormControl('');
  profs: Array<ProfSearch> = [];

  constructor(private searchService: SearchService) { }
   
  ngOnInit(): void {

  }

   search(){ // defining service layers RestAPI and injected in component
   this.profs = this.searchService.GetSearchResult(this.subject.value);
   }  
}
