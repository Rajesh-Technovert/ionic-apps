import { Booking } from './../models/booking.model';
import { BookingService } from './../services/booking.service';
import { Component, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  loadedBookings: Booking[];
  constructor(private bookingService: BookingService ) { }

  ngOnInit() {
    this.loadedBookings = this.bookingService.bookings;
  }
  onDeleting(id: string, item: IonItemSliding){
    item.close();
  }

}
