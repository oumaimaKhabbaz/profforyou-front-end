 import { LocationChangeEvent } from "@angular/common";
 import { HttpClient } from '@angular/common/http';

export interface ProfModel{
    subjects: String[];
    hourlyPrice: number;
    profResume: ProfResume;
    account:Account;
    rate: number;
    nbrOfReviews: number;
    teachingMethod:String;
    city: String
   // need to add firstlessonfree

}

export interface ProfResume{
    title: string;
    subTitle: string;
    description: string;
   // need to add firstlessonfree

}

export interface Subscription{
    startDate: string;
    endDate: string;
   // need to add firstlessonfree

}

export interface Account{
    firstname: string;
    lastname: string;
    password: string;
    email: string;
   // need to add firstlessonfree

}
