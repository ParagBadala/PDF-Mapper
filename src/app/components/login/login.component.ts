import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router, private loginService: LoginService) { }

  ngOnInit() {
  }

  model ={
    username :'',
    password:''
  };

  public isValid : boolean = true;

  onSubmit(form : NgForm){
    console.log(form)
    if(form.value.uname=="jdoe" && form.value.password=="jdoe123"){
      this.loginService.login();
      this.route.navigate(['home']);
    }
    else{
      this.isValid = false;
    }
  }
}
