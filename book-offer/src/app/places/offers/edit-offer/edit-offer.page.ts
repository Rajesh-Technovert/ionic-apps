import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Place } from 'src/app/models/place.model';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {

  place: Place;
  form: FormGroup;
  dateValue1 = '';
  dateValue2 = '';
  date: Date = new Date();
  constructor(private activatedRoute: ActivatedRoute, private navCtrl: NavController, private placeService: PlacesService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( pm =>{
      if(!pm.has('placeId')){
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }
      this.place = this.placeService.getPlace(pm.get('placeId'));
    });
    this.form = new FormGroup({
      title: new FormControl(this.place.title, {
        validators: [Validators.required],
        updateOn: 'blur'
      }),
      description: new FormControl(this.place.description, {
        validators: [Validators.required, Validators.maxLength(150)],
        updateOn: 'blur'
      }),
      price: new FormControl(this.place.price, {
        validators: [Validators.required, Validators.min(1)],
        updateOn: 'blur'
      }),
      dateFrom: new FormControl(this.formatDate(this.place.dateFrom.toString()), {
        validators: [Validators.required],
        updateOn: 'blur'
      }),
      dateTo: new FormControl(this.formatDate(this.place.dateTo.toString()), {
        validators: [Validators.required],
        updateOn: 'blur'
      }),

    });
  }
  formatDate(value: string) {
    return new Date(value).toDateString();
  }
  onEdit(){
    if(!this.form.valid){
      return;
    }
    console.log(this.form);
  }

}
