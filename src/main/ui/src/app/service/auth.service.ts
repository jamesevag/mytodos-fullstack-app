import { Injectable } from '@angular/core';
import { TODO_JPA_API_URL } from '../app.constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http:HttpClient
  ) { }

  authenticate(username,password){
      return this.http.get<boolean>(`${TODO_JPA_API_URL}/user/exists/${username}/${password}`);
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logout(){
    sessionStorage.removeItem('authenticatedUser');
  }
}
