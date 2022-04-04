import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
})
export class NewOfferPage implements OnInit {
  form: FormGroup;
  dateValue1 = '';
  dateValue2 = '';
  date: Date = new Date();
  constructor() {
  }

  ngOnInit() {
    this.date = new Date();
    this.form = new FormGroup({
      title: new FormControl(null, {
        validators: [Validators.required],
        updateOn: 'blur'
      }),
      description: new FormControl(null, {
        validators: [Validators.required, Validators.maxLength(150)],
        updateOn: 'blur'
      }),
      price: new FormControl(null, {
        validators: [Validators.required, Validators.min(1)],
        updateOn: 'blur'
      }),
      dateFrom: new FormControl(null, {
        validators: [Validators.required],
        updateOn: 'blur'
      }),
      dateTo: new FormControl(null, {
        validators: [Validators.required],
        updateOn: 'blur'
      }),

    });
  }

  getDate(){
    return Date.now;
  }

  addOffer(){
    console.log(this.form);
  }
  formatDate(value: string) {
    return new Date(value).toDateString();
  }

}
