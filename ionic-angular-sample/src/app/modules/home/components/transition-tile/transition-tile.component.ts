import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Transition } from 'src/app/models/transition';

@Component({
  selector: 'app-transition-tile',
  templateUrl: './transition-tile.component.html',
  styleUrls: ['./transition-tile.component.scss'],
})
export class TransitionTileComponent implements OnInit {

  @Input() transition: Transition;
  constructor(private datepipe : DatePipe) { }

  ngOnInit() {}

  getImage(category: string){
    switch(category.toUpperCase()){
      case "TRAVEL":
        return '../../../../../assets/images/travel.svg';
      case "FOOD" :
        return '../../../../../assets/images/food.svg';
        case "SHOPING":
          return '../../../../../assets/images/shoping.svg';
        case "ENTERTAINMENT" :
          return '../../../../../assets/images/entertainment.svg';
          case "HOME USAGE":
            return '../../../../../assets/images/home.svg';
          case "RECHARGES" :
            return '../../../../../assets/images/recharge.svg';
          default:
            return '../../../../../assets/images/money.svg';
    }
  }

  getDateString(){
    try{
      var d = Date.now();
    var td = new Date(this.transition.date);

    if(td.getDate() == td.getDate() &&
    td.getMonth() == td.getMonth() &&
    td.getFullYear() == td.getFullYear()){
      return 'Today'
    }
    else
      return this.datepipe.transform(td, 'dd/MM')
    }
    catch(e){
      return 'Today'
    }
  }

}
