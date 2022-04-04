import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email : string;
  password : string;
  loginForm : FormGroup;

  constructor(private authService: AuthService, private router :Router, private formBuilder: FormBuilder) {
    // this.loginForm = this.formBuilder.group({
    //   email : ["", Validators.required]
    // })
   }

  ngOnInit() {
  }

  get fVal(){
    return this.loginForm.controls;
  }

  login(){
    this.authService.login({email : 'raju@mail.com', password : '123'}).subscribe( res => {
      if(res){
        this.router.navigateByUrl('/tabs')
      }
      else{
      }
    })
  }

}
