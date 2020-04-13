import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../services/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = 'Some Welcome'
  welcomeMessageFromServie:string
  name = ''

  //ActivatedRoute
  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService
    ) { }

  ngOnInit() {
    console.log(this.message)
    this.name = this.route.snapshot.params['name']
  }

  getWelcomeMessageWithParam() {
    console.log(this.service.executeHelloWorldServiceWithParam(this.name))
    this.service.executeHelloWorldServiceWithParam(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    )
  }

  getWelcomeMessage() {
    console.log(this.service.executeHelloWorldService())
    this.service.executeHelloWorldService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleErrorResponse(error)
    )
  }
  handleSuccessfulResponse(response) {
    this.welcomeMessageFromServie = response.message
  }

  handleErrorResponse(error) {
    this.welcomeMessageFromServie = error.error.message
  }
}
