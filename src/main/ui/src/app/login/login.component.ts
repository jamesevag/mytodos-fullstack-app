import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthService } from '../service/hardcoded-auth.service';

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

  constructor(private router : Router,private authService: HardcodedAuthService) { } 

  ngOnInit() {
  }


  handleLogin(){
      if(this.authService.authenticate(this.username, this.password)){
        this.invalidLogin = false;
        this.router.navigate(['welcome',this.username]);
      }else{
        this.invalidLogin = true;
      }


  }
}
