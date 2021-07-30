import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

// import { Validators } from '@angular/forms';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
  myform: FormGroup = new FormGroup({});
  lastName: FormControl = new FormControl;
  FirstName: FormControl = new FormControl;
  email: FormControl = new FormControl;
 
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
   this.createFormControls();
   this.createForm();
  }
  createFormControls(){
    this.FirstName =new FormControl('', Validators.required);
    
    this.lastName= new FormControl('', Validators.required);
   
    this.email= new FormControl('',[Validators.required,
      Validators.pattern("[^@]*@[^@]*")
     ]);
     
    
  }

 
   createForm(){
     this.myform = new FormGroup({
       name: new FormGroup({
         FirstName: this.FirstName,
         lastName:this.lastName ,
       
       }),
       email: this.email
     });
   }
  
  onSubmit(){
    if(this.myform.valid){
    console.log("Form Submitted!", this.myform.value);
    this.myform.reset();
   
  
     
    }
    
  }
 
  }
  

