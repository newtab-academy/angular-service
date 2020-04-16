import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'))

  }

  public currentUser:any = {};

  login(email, senha){
    this.currentUser = {
      email: email,
      senha: senha,
      date: new Date()
    }
    
    localStorage.setItem('currentUser', JSON.stringify(this.currentUser))
    return this.currentUser
  }


}
