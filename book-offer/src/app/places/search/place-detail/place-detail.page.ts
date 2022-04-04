import { CreateBookingComponent } from './../../../bookings/create-booking/create-booking.component';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController, ModalController, NavController } from '@ionic/angular';
import { Place } from 'src/app/models/place.model';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place;
  constructor(private activatedRoute: ActivatedRoute, private navCtrl: NavController, private placeService: PlacesService,
    private modlCtrl: ModalController, private actioSheetCtrl: ActionSheetController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( pm =>{
      if(!pm.has('placeId')){
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }
      this.place = this.placeService.getPlace(pm.get('placeId'));
    });
  }

  onBook(){
    this.actioSheetCtrl.create({
      header: 'Choose Action',
      buttons: [
        {
          text: 'Select Date',
          handler: ()=>{
            this.openBookingModel('Random');
          }
        },
        {
          text: 'Random Date',
          handler: ()=>{
            this.openBookingModel('Random');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    }).then(ase =>{
      ase.present();
    });

  }

  openBookingModel(mode: 'Select' | 'Random'){
    this.modlCtrl.create( {component: CreateBookingComponent, componentProps: { selectedPlace: this.place}}).then(me =>{
      me.present();
      return me.onDidDismiss();
    }).then(resultData =>{
      if(resultData.role === 'confirm'){
        console.log('Booked!');
      }
    });

  }

}
