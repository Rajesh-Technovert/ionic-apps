import { User } from './../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

const helper = new JwtHelperService()
const JWT_TOKEN = 'jwt-token'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl:string = 'http://localhost:21990/api/auth'
  public user : Observable<any>;
  private userData = new BehaviorSubject(null);

  constructor(private storage: Storage, private http: HttpClient,
    private plt : Platform, private router: Router) { }

    loadStoredToken(){
      let platformObs = from(this.plt.ready())

      this.user = platformObs.pipe(
        switchMap(()=>{
          return from(this.storage.get(JWT_TOKEN));
        }),
        map(token => {
          if(token){
            let decoded = helper.decodeToken(token);
            this.userData.next(decoded);
          }else{
            return null
          }
        })
      )

    }

    register(user: User){
    //   this.http.post(this.baseUrl + '/register', {
    //     "UserName":"Raju",
    //     "Email":"raj3@mail.com",
    //     "Password":"P@ssw0rd"
    // }).subscribe(data =>{
    //     return data

    //   })

    this.http.get('http://localhost:21990/api/auth').subscribe(data => {
      console.log(data)
    })


    }

    login(credentials : {email : string , password: string}): Observable<any>{
      if(credentials.email != 'raju@mail.com' || credentials.password != '123')
      return of(null)
      var x = new Map()
      var jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRlc3QiLCJzdWIiOjIsImlhdCI6MTYwNDMwOTc0OSwiZXhwIjoxNjA0MzA5ODA5fQ.jHez9kegJ7GT1AO5A2fQp6Dg9A6PBmeiDW1YPaCQoYs';
      return of(
        jwt
      ).pipe(

        map(token =>{
          if(!token){
            return false
          }
          this.storage.set(JWT_TOKEN, token)
          var decodeUser = helper.decodeToken(token);
          this.userData.next(decodeUser);
          return true;

        })
      )
    }

    getUser(){
      return this.userData.getValue()
    }

    logout(){

    }
}
