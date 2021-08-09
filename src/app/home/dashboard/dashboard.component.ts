import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { SigninComponent } from '../signin/signin.component';
import { SignupComponent } from '../signup/signup.component';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  subjects: String[] = [];
  searchSubject: String = '';

  constructor(private http: HttpClient, public dialog: MatDialog, private router: Router) {
    this.getSubjects();
  }

  ngOnInit(): void {
  }


  getSubjects() {
    return this.http.get<any>('http://localhost:8080/subjects')
      .subscribe({
        next: data => {
          console.log(data)
          this.subjects = data;
          return data;
        },
        error: error => {
          console.error('There was an error!', error);
        }
      });

  }

  redirectToTutors(){
    this.router.navigate(['/tutors']);
  }


  openSignInDialog() {
    const dialogRef = this.dialog.open(SigninComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }

  openSignUpDialog() {
    const dialogRef = this.dialog.open(SignupComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

  }

  about() {
    this.router.navigate(['about-us'])
  }

  search(){
    if (this.searchSubject == '' || this.searchSubject == null){
      this.searchSubject = 'all'
    }
    this.router.navigate(["/tutors"],  { queryParams: { subject: this.searchSubject }})
  }
}
