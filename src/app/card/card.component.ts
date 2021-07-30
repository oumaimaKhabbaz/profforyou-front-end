import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { ProfModel } from '../shared/model/profSearch';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

    @Input() profs: Array<ProfModel> = [];


  constructor() { }

  ngOnInit(): void {
  }

}
