import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn$ : BehaviorSubject<any> = new BehaviorSubject<any>(false);
  isLoggedIn = this.isLoggedIn$.asObservable();

  constructor() { }

  login(){
    this.isLoggedIn$.next(true);
  }

  getLoginStatus(){
    return this.isLoggedIn;
  }

  logout(){
    this.isLoggedIn$.next(false);
  }
}
