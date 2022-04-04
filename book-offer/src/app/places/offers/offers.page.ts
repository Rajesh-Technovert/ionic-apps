import { PlacesService } from './../../services/places.service';
import { OffersService } from './../../services/offers.service';
import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/models/offer.model';
import { Place } from 'src/app/models/place.model';
import { IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  offers: Place[];
  constructor(private placeService: PlacesService, private router: Router) { }

  ngOnInit() {
    this.offers = this.placeService.places;
  }
  onEdit(id: string, slideItem: IonItemSliding){
    slideItem.close();
    this.router.navigate(['/','places', 'tabs', 'offers','edit', id]);

  }
}
