import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './home/signup/signup.component';
import { SigninComponent } from './home/signin/signin.component';
import { AboutComponent } from './home/about/about.component';
import { HelpComponent } from './help/help.component';
import { DonationComponent } from './donation/donation.component';
import { SearchformComponent } from './home/searchform/searchform.component';
import { CardComponent } from './card/card.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    AboutComponent,
    HelpComponent,
    DonationComponent,
    SearchformComponent,
    CardComponent,
    FooterComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
