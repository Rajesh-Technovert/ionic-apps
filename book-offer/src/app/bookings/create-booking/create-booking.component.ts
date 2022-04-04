
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Place } from './../../models/place.model';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {

  @Input() selectedPlace: Place;
  @Input() selectedMode: 'Select' | 'Random';
  dateValue2 = '';
  dateValue1 = '';
  strtDate: string;
  endDate: string;
  constructor(private mdlCtrl: ModalController) { }

  ngOnInit() {
    const dateFrom = new Date(this.selectedPlace.dateFrom);
    const dateTo = new Date(this.selectedPlace.dateTo);
    if(this.selectedMode === 'Random'){
      this.strtDate = new Date(dateFrom.getTime() + Math.random() * (dateFrom.getTime() - 7*24*60 *60*1000- dateFrom.getTime()))
      .toISOString();
      this.endDate = new Date(new Date(this.strtDate).getTime() + Math.random() * (new Date(this.strtDate).getTime()
      * 6*24*60 *60*1000- new Date(this.strtDate).getTime()))
      .toISOString();
    }
  }
  onBookPlace(){
    this.mdlCtrl.dismiss({ message: 'Dummy Message'},'confirm');

  }
  onCancel(){
    this.mdlCtrl.dismiss();
  }
  formatDate(value: string) {
    return new Date(value).toDateString();
  }

}
