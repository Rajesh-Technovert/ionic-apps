import { Place } from './../models/place.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  public places: Place[] = [
    new Place('p1','New York', 'Romantic Place in the world', 'https://wfuna.org/files/image/page/mg_1_1_new_york_city-1.jpg', 2000.0,
    new Date(), new Date()),
    new Place('p2','Singapore', 'Singapore 2065 will explore and celebrate Singapore\'s growth into a city of the future.',
    'https://www.state.gov/wp-content/uploads/2019/04/Singpore-2560x1319.jpg',
     2000.0,new Date(), new Date()),
    // eslint-disable-next-line max-len
    new Place('p3','Australia', 'Romantic Place', 'https://assets3.thrillist.com/v1/image/2875152/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70', 2000.0,
    new Date(), new Date()),
  ];

  constructor() { }

  getPlace(id: string){
    return this.places.find(p => p.id === id);
  }

}
