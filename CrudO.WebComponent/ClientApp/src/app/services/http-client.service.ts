
import { environment } from "./../../environments/environment";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders } from "@angular/common/http";







@Injectable()
export class HttpClientService {
  Prefix: string; // = "http://localhost:60295/api/";

  constructor(
    private http: HttpClient,
    private router: Router
  ) {

    this.Prefix = environment.baseApiHref;
  }


  get = (url: string): any => {
    // const httpOptions = { withCredentials: true };
    // return this.http.get(url, httpOptions);
    return this.http.get(url);
  }


  post = (url: string, body: any): any => {
    // const httpOptions = { withCredentials: true };
    // return this.http.post(url, body, httpOptions);
    return this.http.post(url, body);
  }

}
