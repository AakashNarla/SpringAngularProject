import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../services/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'aakashnarla'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  //Router Initilize with Dependency Injection


  constructor(private route:  Router,
    private harcodedAuthencticationService: HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {
    console.log(this.username)

    if(this.harcodedAuthencticationService.authenticate(this.username, this.password)) {
      this.route.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }

}
