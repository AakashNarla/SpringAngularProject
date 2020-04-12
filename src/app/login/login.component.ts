import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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


  constructor(private route:  Router) { }

  ngOnInit() {
  }

  handleLogin() {
    console.log(this.username)

    if(this.username === 'aakashnarla' && this.password === 'aakash') {
      this.route.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }

}
