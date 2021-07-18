import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  toggleIsAuthenticated() {
    this.isAuthenticated = !this.isAuthenticated;
  }

  showSignUpDialog() {
    const dialogRef = this.dialog.open(SignupComponent, {
      width: '250px',
      data: { name: this.name, animal: this.username }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.username = result;
    });
  }

  showSignInDialog() {
    const dialogRef = this.dialog.open(SigninComponent, {
      width: '250px',
      data: { name: this.name, animal: this.username }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.isAuthenticated = true;
    });

  }

  showLogoutDialog() {
    this.isAuthenticated = false;
  }

}
