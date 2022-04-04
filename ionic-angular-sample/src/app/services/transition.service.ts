import { StorageService } from './storage.service';
import { Transition } from 'src/app/models/transition';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransitionService {

  transitions: Transition[] = [];

  constructor(private storageService: StorageService) {
    // this.transition=[
    //   {
    //     title : "Food",
    //     imageUrl : "https://i.pinimg.com/originals/fd/80/ec/fd80ecec48eba2a9adb76e4133905879.png",
    //     date: Date.now(),
    //     expense : 200.0,
    //     category :"Food",
    //     note: "Sample"

    //   },{
    //     title : "Travel",
    //     imageUrl : "https://o.remove.bg/downloads/16a09cd6-d394-4a17-8789-72010e9d105d/344-3445741_thumb-image-travel-icon-transparent-background-hd-png-removebg-preview.png",
    //     date: Date.now(),
    //     expense : 2000.0,
    //     category :"Food",
    //     note: "Sample"

    //   },
    //   {
    //     title : "Shopping",
    //     imageUrl : "https://o.remove.bg/downloads/ed83b338-8a44-4528-95b8-cfa770be739b/download-removebg-preview.png",
    //     date: Date.now(),
    //     expense : 4000.0,
    //     category :"Food",
    //     note: "Sample"

    //   }];
    //   this.transitions.next(this.transition);

  }

  async addExpense(transition: Transition): Promise<boolean> {
    this.transitions = await this.storageService.getObject<Transition[]>('transitions');
    if(this.transitions == null)
     this.transitions = [];
    this.transitions.push(transition);
    return await this.storageService.setObject('transitions', this.transitions);

  }

  async getAll(): Promise<Transition[]> {
    return await this.storageService.getObject<Transition[]>('transitions');
  }
}
