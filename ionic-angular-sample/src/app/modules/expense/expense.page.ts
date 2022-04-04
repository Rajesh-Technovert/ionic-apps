import { FormGroup } from '@angular/forms';
import { TransitionService } from './../../services/transition.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Transition } from 'src/app/models/transition';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.page.html',
  styleUrls: ['./expense.page.scss'],
})
export class ExpensePage implements OnInit {

  transitionGroup : FormGroup;
  transition : Transition;
  selectedCategory: string = "Food";
  date: Date;
  constructor(private router: Router, private service: TransitionService) {
    this.transition = new Transition();
   }

  ngOnInit() {
  }
  addExpense(){

  }
  onBack(){

    this.router.navigateByUrl('/tabs');
  }
  async save(): Promise<any>{
    await this.service.addExpense(this.transition)
    this.router.navigateByUrl('/tabs');
  }
}
