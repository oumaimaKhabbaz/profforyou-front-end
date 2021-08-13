import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students-profile',
  templateUrl: './students-profile.component.html',
  styleUrls: ['./students-profile.component.css']
})
export class StudentsProfileComponent implements OnInit {

  photoSrc: string = "";
  errorMessage: string = " ";

  constructor() { }

  ngOnInit(): void {
  }

  updateCanChangePassword(oldPass: any, newPass1: any, newPass2: any) {
    if (oldPass.value.length < 8) {
      this.errorMessage = "Old password should be at least 8 characters long";
      return;
    }
    if (newPass1.value.length < 8) {
      this.errorMessage = "New password should be at least 8 characters long";
      return;
    }
    if (newPass1.value === oldPass.value) {
      this.errorMessage = "New password cannot be equal to old one";
      return;
    }
    if (newPass1.value !== newPass2.value) {
      this.errorMessage = "New passwords do not match";
      return;
    }
    this.errorMessage = "";
  }

  filterPhone($event: KeyboardEvent) {
    if (!"0123456789+ ".includes($event.key)) {
      $event.preventDefault();
    }
  }

  uploadPhoto(input: any) {

    const outputImage = document.querySelector('img.photo');

    // @ts-ignore
    const file = input.files[0];
    const imageType = /image.*/;

    if (file.type.match(imageType)) {
        const reader = new FileReader();

        reader.onload = event => {

            const img = new Image();
            // @ts-ignore
            outputImage.src = reader.result;
          }

        reader.readAsDataURL(file); 
      } else {
        // @ts-ignore
        outputImage.src = "/assets/avatar.png"
      }
  }

}