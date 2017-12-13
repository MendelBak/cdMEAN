import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class DataService {
  userExists: boolean = false;
  score: number = 0;

    // Inject Http
  constructor(private http: Http) { }



  getGithubScore(username) {
    // Make the HTTP request:
    return this.http.get(`https://api.github.com/users/${username}`)
    // response is a variable being created now. It is then taking that data from the API and converting it to JSON format.
    // Then, it sends it back to the function that called it (fulfill promise).
    .map(response => response.json()).toPromise();

  }
}
