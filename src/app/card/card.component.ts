import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  profs: Array<string>= ["oumaima", "issam", "germany", "fourThouasands", "git", "boring"]

  constructor() { }

  ngOnInit(): void {
  }

}
