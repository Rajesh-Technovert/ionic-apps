import { PlacesService } from './../../services/places.service';
import { Component, OnInit } from '@angular/core';
import { Place } from 'src/app/models/place.model';
import { SegmentChangeEventDetail } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  loadedPlaces: Place[] = [];

  constructor(private placeService: PlacesService) { }

  ngOnInit() {
    this.loadedPlaces = this.placeService.places;
    console.log(this.loadedPlaces);
  }
  segmentChanged(event: any){
    console.log(event.detail);

  }

}
