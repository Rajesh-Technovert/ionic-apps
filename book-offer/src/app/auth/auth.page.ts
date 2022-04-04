import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  isLoading = false;
  isLogin = true;
  constructor(private authService: AuthService, private router: Router, private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  onLogin(){
    this.isLoading= true;
    this.authService.login();
    this.loadingCtrl.create({keyboardClose: true, message: 'Logging in..'}).then(le =>{
      le.present();
      setTimeout(() => {
        this.isLoading = false;
        le.dismiss();
        this.router.navigateByUrl('/places/tabs');
      }, 1000);
    });
  }

  onSwitchAuthMode(){
    this.isLogin = !this.isLogin;
  }

  onSubmit(f: any){
    if(!f.valid){
      return;
    }
    const email = f.value.email;
    const pwd = f.value.password;
    console.log(email + ' ' + pwd);
    if(this.isLogin){

    }
    else{

    }
  }

}
