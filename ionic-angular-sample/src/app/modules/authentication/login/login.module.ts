import { IonicStorageModule} from '@ionic/storage-angular'
import { InputComponent } from './../components/input/input.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    IonicStorageModule,
    ReactiveFormsModule

  ],
  declarations: [LoginPage, InputComponent],
  exports : [InputComponent]
})
export class LoginPageModule {}
