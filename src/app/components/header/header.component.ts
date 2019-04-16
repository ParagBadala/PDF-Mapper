import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loginStatus : boolean = false;

  constructor(private loginService: LoginService, private route:Router) { }

  ngOnInit() {
    this.loginService.getLoginStatus().subscribe((data)=>{
      this.loginStatus = data;
    });
  }

  public signOut() {
    this.loginService.logout();
    this.route.navigateByUrl('/login');
  }  

}
