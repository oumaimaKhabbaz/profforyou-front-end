import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './home/signup/signup.component';
import { SigninComponent } from './home/signin/signin.component';
import { AboutComponent } from './home/about/about.component';
import { HelpComponent } from './help/help.component';
import { SearchformComponent } from './home/searchform/searchform.component';
import { DonationComponent } from './donation/donation.component';
import { CardComponent } from './card/card.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: 'register',
    component: SignupComponent
  },

  {
    path: 'signin',
    component: SigninComponent
  },

  {
    path: 'about',
    component: AboutComponent
  },

  {
    path: 'home',
    component: DashboardComponent
  },

  {
    path: 'help',
    component: HelpComponent
  },

  {
    path: 'donation',
    component: DonationComponent
  },
  {
    path: 'search',
    component: SearchformComponent
  },

  {
    path: 'card',
    component: CardComponent
  },

  {
    path: 'forgotPassword',
    component: ForgotPasswordComponent
  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
