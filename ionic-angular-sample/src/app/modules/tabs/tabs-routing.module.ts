import { HomePage } from './../home/home.page';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {

        path: 'tab-home',
        children: [
          {
            path: '',
            loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
          }
        ]

      },
      {
        path: 'tab-history',
        children: [
          {
            path: '',
            loadChildren: () => import('../expense-history/expense-history.module').then(m => m.ExpenseHistoryPageModule)
          }
        ]

      },
      {
        path: '',
        redirectTo: '/tabs/tab-home',
        pathMatch:'full'

      },

    ],

  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
