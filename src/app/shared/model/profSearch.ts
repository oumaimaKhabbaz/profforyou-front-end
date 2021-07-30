 import { LocationChangeEvent } from "@angular/common";
 import { HttpClient } from '@angular/common/http';

export interface ProfModel{
    name : string;
    city: string;
    teachingMethod: string ;
    rate : number  ;
    nbrOfReviews: number;
    profDescription: string;
    courseCost: number  ;
    firstLessonOffer : boolean;
   // need to add firstlessonfree

 

}