import { Component, Input, OnInit } from '@angular/core';
import { Transition } from 'src/app/models/transition';

@Component({
  selector: 'app-expense-card',
  templateUrl: './expense-card.component.html',
  styleUrls: ['./expense-card.component.scss'],
})
export class ExpenseCardComponent implements OnInit {
  expense: number = 0.0;

  @Input() transitions : Transition[]
  constructor() { }

  ngOnInit() {}

  getTotalBal(){
    return this.getIncome() - this.expense;
  }

  getExpense(){
    var expense = 0.0;
    if(this.transitions != null && this.transitions.length > 0)
    this.transitions.forEach(tr =>
      {
        expense  = expense + parseFloat(tr.expense);
      })
      this.expense = expense;
      return expense;
  }
  getIncome(){
    return 20000;
  }


}
