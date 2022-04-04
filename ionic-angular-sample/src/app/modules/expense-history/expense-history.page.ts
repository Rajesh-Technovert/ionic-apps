import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense-history',
  templateUrl: './expense-history.page.html',
  styleUrls: ['./expense-history.page.scss'],
})
export class ExpenseHistoryPage implements OnInit {

  index: number = 0;
  constructor() { }

  ngOnInit() {
  }

  changeTab(index: number){
    this.index = index

  }
  getClass(index: number){
    return (this.index == index)? 'active-button' : '';
  }

}
