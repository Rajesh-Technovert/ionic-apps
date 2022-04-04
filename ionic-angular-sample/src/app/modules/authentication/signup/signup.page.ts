import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  user: User= new User();

  constructor(private auth: AuthService) { }

  signup(){
    this.user.UserName = "Rajesh K"
    this.user.Email = "raj1@mail.com"
    this.user.Password = "P@ssw0rd"

    var res = this.auth.register(this.user);
    console.log(res)
  }

  ngOnInit() {
  }

}
