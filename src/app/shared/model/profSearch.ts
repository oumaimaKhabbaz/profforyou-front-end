// import { LocationChangeEvent } from "@angular/common";
// import { HttpClient } from '@angular/common/http';

// export class ProfSearch{
//     name : string= "O";
//     city: string = "O";
//     teachingMethod: string = "O";
//     rate =12 ;
//     nbrOfReviews: number= 0;
//     profDescription: string= "O";
//     courseCost = 0 ;

//     constructor (private http: HttpClient){}

// } 

export interface ProfSearch {
    name: string;
    city: string;
    teachingMethod: string;
    rate: number;
    nbrOfReviews: number;
    profDescription: string;
    courseCost: number;
}