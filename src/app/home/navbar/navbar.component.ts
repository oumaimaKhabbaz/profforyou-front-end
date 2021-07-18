import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuthenticated =  false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleIsAuthenticated () {
    this.isAuthenticated = !this.isAuthenticated; 
  }

}
