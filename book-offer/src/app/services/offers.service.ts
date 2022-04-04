import { Injectable } from '@angular/core';
import { Offer } from '../models/offer.model';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  public offers: Offer[] = [
    new Offer('p1','New York', 'https://wfuna.org/files/image/page/mg_1_1_new_york_city-1.jpg', 2000.0),
    new Offer('p2','Singapore',
    'https://www.state.gov/wp-content/uploads/2019/04/Singpore-2560x1319.jpg',
     2000.0),
    // eslint-disable-next-line max-len
    new Offer('p3','Australia', 'https://assets3.thrillist.com/v1/image/2875152/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70', 2000.0),
  ];

  constructor() { }
}
