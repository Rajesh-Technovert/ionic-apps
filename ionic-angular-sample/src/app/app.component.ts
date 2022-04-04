import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  text:String;
  constructor(storage: Storage) {
    storage.create()
  }

  onClick(){
    this.text = "Clicked!"
  }
}
