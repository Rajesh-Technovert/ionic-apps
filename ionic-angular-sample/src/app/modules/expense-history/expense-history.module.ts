import { ExpenceChartComponent } from './components/expence-chart/expence-chart.component';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpenseHistoryPageRoutingModule } from './expense-history-routing.module';

import { ExpenseHistoryPage } from './expense-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,

    ExpenseHistoryPageRoutingModule
  ],
  declarations: [ExpenseHistoryPage, ExpenceChartComponent],
  providers: [DatePipe]
})
export class ExpenseHistoryPageModule {}
