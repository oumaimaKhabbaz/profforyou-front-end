import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SigninComponent } from '../signin/signin.component';
import { SignupComponent } from '../signup/signup.component';
import { LocalStorageService } from 'ngx-localstorage';
import { Token } from '@angular/compiler/src/ml_parser/lexer';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuthenticated:boolean= this.checktoken();
  name: string ='';
  username: string ='';
  
  showFiller = false;

  menuIsOpen: boolean = false;

  constructor(private _localStorage: LocalStorageService) {
    this.checktoken();
   }

  ngOnInit(): void {
    this.checktoken();
  }
  
  toggleIsAuthenticated () {
    this.isAuthenticated = !this.isAuthenticated; 
  }


  logout(){
    this._localStorage.remove("token")
    this.isAuthenticated = false; 
  }

  checktoken(){
    if (this._localStorage.get("token") != null){
     return  this.isAuthenticated = true; 
    }
    return false;
  }
 


}