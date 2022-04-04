import { ExpenseCardComponent } from './components/expense-card/expense-card.component';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { TransitionTileComponent } from './components/transition-tile/transition-tile.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, TransitionTileComponent, ExpenseCardComponent],
  providers: [DatePipe]
})
export class HomePageModule {}
