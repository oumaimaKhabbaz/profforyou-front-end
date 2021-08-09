import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './home/signup/signup.component';
import { SigninComponent } from './home/signin/signin.component';
import { AboutComponent } from './home/about/about.component';
import { HelpComponent } from './help/help.component';
import { SearchformComponent } from './home/searchform/searchform.component';
import { PaymentComponent } from './payment/payment.component';
import { CardComponent } from './card/card.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { TutorsComponent } from './home/tutors/tutors.component';
import { TermsandconditionsComponent } from './termsandconditions/termsandconditions.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { DonationComponent } from './donation/donation.component';
import { SubscriptionComponent } from './subscription/subscription.component';


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
    path: 'subscribe',
    component: SubscriptionComponent
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
  {
    path: 'tutors',
    component:TutorsComponent
  },

  {
    path: 'termsandconditions',
    component: TermsandconditionsComponent
  },

  {
    path: 'privacy',
    component: PrivacyComponent
  },
   {
     path: 'donation',
   component: DonationComponent
   },
   {
     path:'payment',
     component: PaymentComponent
   },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
