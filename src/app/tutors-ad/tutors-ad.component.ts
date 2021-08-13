import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-tutors-ad',
  templateUrl: './tutors-ad.component.html',
  styleUrls: ['./tutors-ad.component.css']
})
export class TutorsAdComponent implements OnInit {
 
  ads =[
    {
      src: "", 
      title: "Expert in React.js",
      description: "Hello my name is oumaima, I'm a grad student and I'm expert in CSS, Html if you want to reach me and hgkjkjhd hfcyf hgvcqhvjhc",
      cost:"15"
    }
  ]
  

  constructor() { }

  ngOnInit(): void {
  }

  inputImage() {
  //@ts-ignore
    const image    = document.querySelector('input[type=file]').file[0];
    const reader  = new FileReader();
    let preview= document.getElementById("preview") as HTMLImageElement;
    reader.onloadend = function () {
      //@ts-ignore
      preview.src = reader.result;
    }
  
    if (image) {
      reader.readAsDataURL(image);
    } else {
      preview.src = "";
    }
  }
  
  createAd(title:any, description:any, cost:any){
   const newAd ={ 
     src:"",
     title: title.value,
     description: description.value,
     cost: cost.value
   }
   title.value = ""
   description.value=""
   cost.value=""
   this.ads.push(newAd)
  }

}
