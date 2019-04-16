import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  public isLoggedIn;
  constructor(private loginService: LoginService, private route:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      this.loginService.getLoginStatus().subscribe((data)=>{
        this.isLoggedIn = data;
        console.log(data);
      })
      if(!this.isLoggedIn){
        this.route.navigate(['login']);
        return false;
      }
      return true;
  }
}
