import { PlacesService } from './../../../services/places.service';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Place } from './../../../models/place.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {

  place: Place;
  constructor(private activatedRoute: ActivatedRoute, private navCtrl: NavController, private placeService: PlacesService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( pm =>{
      if(!pm.has('placeId')){
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }
      this.place = this.placeService.getPlace(pm.get('placeId'));
    });
  }

}
