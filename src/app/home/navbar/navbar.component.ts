import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SigninComponent } from '../signin/signin.component';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isAuthenticated = false;
  name: string ='';
  username: string ='';
  
  showFiller = false;

  menuIsOpen: boolean = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  
  }
  
  toggleIsAuthenticated () {
    this.isAuthenticated = !this.isAuthenticated; 
  }

  signUp(){
    const dialogRef = this.dialog.open(SignupComponent, {
      width: '250px',
      data: { name: this.name, animal: this.username }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.username = result;
    });

  }

  signIn(){
  
    const dialogRef = this.dialog.open(SigninComponent, {
      width: '250px',
      data: { name: this.name, animal: this.username }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.isAuthenticated = true;
    });
  }

  logout(){
    this.isAuthenticated = false; 
  }
 

}