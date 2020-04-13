import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

export class HelloWorldBean {
  constructor(public message:String){}
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient
  ) { }

  executeHelloWorldService() {
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean')
    //console.log("Execute Hello World Bean")
  }

  executeHelloWorldServiceWithParam(name) {
    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world-bean/${name}`)
    //console.log("Execute Hello World Bean")
  }
}
