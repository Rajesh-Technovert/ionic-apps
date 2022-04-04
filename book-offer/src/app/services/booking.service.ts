/* eslint-disable no-underscore-dangle */
import { Booking } from './../models/booking.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private _bookings: Booking[] = [
    {
      id: 'b1',
      placeId: 'p1',
      placeTitle:'New York',
      userId: 'u1',
      guestNo:2,
    },
    {
      id: 'b2',
      placeId: 'p2',
      placeTitle:'Australia',
      userId: 'u2',
      guestNo:6,
    }
  ];
  constructor() { }

  get bookings(){
    return [...this._bookings];
  }

}
