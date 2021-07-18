import { Component } from '@angular/core';
import { trigger, state, style, animate,transition, } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [trigger, state, style, animate,transition]
})
export class AppComponent {
  title = 'prof4you-frontend';
 
}

