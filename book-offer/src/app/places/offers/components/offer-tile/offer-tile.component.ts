import { Place } from './../../../../models/place.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer-tile',
  templateUrl: './offer-tile.component.html',
  styleUrls: ['./offer-tile.component.scss'],
})
export class OfferTileComponent implements OnInit {
  @Input() offer: Place;
  constructor() { }

  ngOnInit() {}
  getDate(){
    return Date.now();
  }

}
