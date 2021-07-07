import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchformComponent } from './searchform/searchform.component';

import { AboutComponent } from './about/about.component';
import { TutorsComponent } from './tutors/tutors.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    NavbarComponent,
    SearchformComponent,
    AboutComponent,
    TutorsComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class HomeModule { }
