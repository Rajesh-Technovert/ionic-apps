import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Transition } from 'src/app/models/transition';
import { TransitionService } from 'src/app/services/transition.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

  transitions : Transition[]
  constructor(private transitionService: TransitionService, private route: ActivatedRoute, private router: Router) {
   this.route.params.subscribe(val =>{
     this.update()
   })


  }
  fetchData(){
    this.transitionService.getAll().then(data =>{
      this.transitions = data
    });
  }

  update(){
    this.fetchData()

  }
  delete(item:any){
    console.log(item)
  }
  showProfile(){
    this.router.navigateByUrl('/profile')
  }

}
