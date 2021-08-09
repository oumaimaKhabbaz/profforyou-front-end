import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  
  constructor() { }
  amountValue: number = 50;
  isEditing: boolean = false;
  amountIsValid: boolean = true;
  canPay: boolean = false;
  paymentSuccessful: boolean = false;

  // @Input() paymentType:


    ngOnInit(): void {
    }

isArrowCode(code: number): boolean {
  const LEFT = 37;
  const RIGHT = 39;
  return [LEFT, RIGHT].includes(code);
}

adaptCardNo($event: any) {
  const element = $event.target;
  const length = element.value.length;
  const key = $event.key;

  console.log($event.keyCode)

  if (this.isArrowCode($event.keyCode)) {
    return;
  }

  if (key === "Backspace") {
    // delete empty space
    if ([5, 10, 15].includes(length)) {
      element.value = element.value.slice(0, -1);
    }
  } else {
    // prevent non numeric values
    if (isNaN(+key)) {
      $event.preventDefault();
    } else {
      //add empty space
      if ([4, 9, 14].includes(length)) {
        element.value += " " + key;
        $event.preventDefault();
      }
    }
  }
}

adaptExpiration($event: any) {
  const element = $event.target;
  const length = element.value.length;
  const key = $event.key;

  if (this.isArrowCode($event.keyCode)) {
    return;
  }
  if (key === "Backspace") {
    // delete slash
    if (length === 5) {
      element.value = element.value.slice(0, -3);
    }
  } else {
    // prevent non numeric values
    if (isNaN(+key)) {
      $event.preventDefault();
    } else {
      //add slash
      if (element.value.length == 1) {
        element.value += key + " / ";
        $event.preventDefault();
      }
    }
  }
}

editAmount($element: any) {
  this.isEditing = !this.isEditing;
  $element.editable = this.isEditing;

  if (!this.isEditing) {
    this.amountValue = $element.value;
    this.updateCanPay();
  }
}

updateAmountIsValid($element: any) {
  this.amountIsValid = !isNaN($element.value);
}

updateDateIsValid($element: any) {
  const [mm, yy] = $element.value.split(" / ");
  if (mm < 1 || mm > 12) {
    this.canPay = false;
    return;
  }
  const currentYear = (new Date().getFullYear() + "").slice(2, -2);
  const currentMonth = new Date().getMonth() + 1;
  if (yy < currentYear) {
    this.canPay = false;
    return;
  }
  if (mm < currentMonth && yy == currentYear) {
    this.canPay = false;
    return;
  }
  this.canPay = true;
}

// @ts-ignore
updateCanPay() {
  const nameIsNotEmpty = (document.getElementById("name") as HTMLInputElement).value.length > 0;
  const cardnoIsGood = (document.getElementById("cardno") as HTMLInputElement).value.length === 19;
  const expiryDateIsGood = (document.getElementById("expiry") as HTMLInputElement).value.length === 7;
  const secCodeIsGood = (document.getElementById("seccode") as HTMLInputElement).value.length > 0;
  const zipCodeIsGood = (document.getElementById("zip") as HTMLInputElement).value.length > 0;
  console.log(nameIsNotEmpty, cardnoIsGood, this.isEditing, expiryDateIsGood, secCodeIsGood, zipCodeIsGood)
  this.canPay = nameIsNotEmpty && cardnoIsGood && !this.isEditing && expiryDateIsGood && secCodeIsGood && zipCodeIsGood;
}

pay() {
  this.paymentSuccessful = true;
}


}
