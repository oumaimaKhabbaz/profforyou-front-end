import { Component, OnInit, Input } from '@angular/core';
import { ProfSearch } from '../shared/model/profSearch';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

    @Input() profs: Array<ProfSearch> = [];


  constructor() { }

  ngOnInit(): void {
  }

}
