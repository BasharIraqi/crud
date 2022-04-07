import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private readonly EMAIL_KEY ='EMAIL';
  isAuthenticated:boolean=false;
  constructor(private _router:Router) {
   
   }

  ngOnInit(): void {
  }
  onLogin(value:any):void{
  if(value.email==="bobo@gmail.com"&&value.password==="b123"){
  this.isAuthenticated=true;
  localStorage.setItem(this.EMAIL_KEY,value.email);
  this._router.navigate(['dashboard']);
  }
  else{
    this.isAuthenticated=false;
  }
  }
}
