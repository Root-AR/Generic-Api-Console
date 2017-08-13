import { Component } from '@angular/core';
import { Http , Response, RequestOptions, Headers } from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Generic API Console';
  apiResult = '';
  apiUrl = '';
  queryParams = '';
  token = '';
  url = '';


  constructor(private http: Http) {

  };

  generateUrl () {
    this.url = this.apiUrl + '?' +this.queryParams;
    return this.url
  };
  getHeaders () {

      var headers = {
        'Accept': 'application/json', 
        'Content-Type': 'application/json',
        'Authorization' : ''
      };
      headers.Authorization = this.token;
      return headers;
  };

  getApiResult () {
  	this.http.get(this.generateUrl(),this.getHeaders()).subscribe(data => {
    	this.apiResult = data["_body"];
    });
  }

}
