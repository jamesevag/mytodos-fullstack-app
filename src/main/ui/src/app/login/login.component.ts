import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username="admin";
  password="admin";
  errorMessage="Invalid Credentials";
  invalidLogin=false;

  constructor(private router : Router,private authService: AuthService) { } 

  ngOnInit() {
  }


  handleLogin(){

     this.authService.authenticate(this.username, this.password)
    .subscribe (
      data => this.invalidLogin = data
     )
      
     if(!this.invalidLogin){
        this.router.navigate(['welcome',this.username]);
      }
  }
  
}
