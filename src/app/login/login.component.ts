import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.auth.currentUser)
  }

  errors:any = {}
  currentUser:any = {}


  teste

  acaoLogin() {
    this.auth.login(this.currentUser.email, this.currentUser.senha);
    this.router.navigateByUrl('/home')
  }


}
