import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EMS System';
  constructor(private Auth:AuthService,private router : Router){
    Auth.logout();
   
}
isloggedin():boolean{
  return this.Auth.isloggedin();
}
logout(){
  this.Auth.logout();
}
}