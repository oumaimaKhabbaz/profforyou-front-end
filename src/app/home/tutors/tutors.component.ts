import { Component, OnInit } from '@angular/core';
import { ProfModel } from 'src/app/shared/model/profSearch';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-tutors',
  templateUrl: './tutors.component.html',
  styleUrls: ['./tutors.component.css']
})
export class TutorsComponent implements OnInit {
  profsLength :number= 0;
  profs: Array<ProfModel> = [
    {
      'name': 'Mathew',
      'city': 'London',
      'teachingMethod': "Cam",
      'rate': 5,
      'nbrOfReviews': 224,
      'profDescription': 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.  A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      'courseCost': 50,
      'firstLessonOffer': true
    },
    {
      'name': 'Albert',
      'city': 'London',
      'teachingMethod': "Cam",
      'rate': 5,
      'nbrOfReviews': 224,
      'profDescription': 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.  A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      'courseCost': 50,
      'firstLessonOffer': true
    },
    {
      'name': 'Mark',
      'city': 'London',
      'teachingMethod': "Cam",
      'rate': 5,
      'nbrOfReviews': 224,
      'profDescription': 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.  A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      'courseCost': 50,
      'firstLessonOffer': true
    },
    {
      'name': 'Leo',
      'city': 'London',
      'teachingMethod': "Cam",
      'rate': 5,
      'nbrOfReviews': 224,
      'profDescription': 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.  A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      'courseCost': 50,
      'firstLessonOffer': false
    },
    {
      'name': 'Alexandra',
      'city': 'London',
      'teachingMethod': "Cam",
      'rate': 5,
      'nbrOfReviews': 224,
      'profDescription': 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.  A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      'courseCost': 50,
      'firstLessonOffer': true
    },
    {
      'name': 'Mathew',
      'city': 'London',
      'teachingMethod': "Cam",
      'rate': 5,
      'nbrOfReviews': 224,
      'profDescription': 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.  A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      'courseCost': 50,
      'firstLessonOffer': false
    },
    {
      'name': 'Norbert',
      'city': 'London',
      'teachingMethod': "Cam",
      'rate': 5,
      'nbrOfReviews': 224,
      'profDescription': 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.  A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      'courseCost': 50,
      'firstLessonOffer': true
    },
    {
      'name': 'Mathew',
      'city': 'London',
      'teachingMethod': "Cam",
      'rate': 5,
      'nbrOfReviews': 224,
      'profDescription': 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.  A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      'courseCost': 50,
      'firstLessonOffer': false
    },
    {
      'name': 'Leila',
      'city': 'London',
      'teachingMethod': "Cam",
      'rate': 5,
      'nbrOfReviews': 224,
      'profDescription': 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.  A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      'courseCost': 50,
      'firstLessonOffer': true
    },
  ];
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        console.log(params.subject); // subject
        this.searchTutors(params.subject);
      }
      );
  }

  searchTutors(subject :String) {
    let url = 'http://localhost:8080/prof/search?subject=';
    this.http.get<any>(url + subject)
    .subscribe({
      next: data => {
        this.profs = data
        this.profsLength =  this.profs.length
      },
      error: error => {
        console.error('There was an error!', error);
      }
    });
  }

}