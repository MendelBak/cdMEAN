import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {
  loggedUser;

    // Inject Http
    constructor(private _http: Http) { }

  registerUser(newUser) {
    console.log('reached registerUser function inside data.service.ts');
    console.log('this is the newUser parameter sent over from loginReg component ->', newUser);
    this.loggedUser = newUser;
    console.log(this.loggedUser);
    return this._http.post(`/api/register`, newUser)
    .map(response => response.json())
    .toPromise();
  }

  getAllUsers() {
    console.log('reached the getAllUsers function in service.ts file');
    return this._http.get('/api/getAllUsers')
    .map(response => response.json())
    .toPromise();
  }

  submitQuestion(newQuestion) {
    console.log('Reached services file');
    console.log(newQuestion);
    return this._http.post('/api/submitNewQuestion', newQuestion)
    .map(response => response.json())
    .toPromise();
  }

  getQuestions() {
    return this._http.get('/api/getQuestions')
    .map(response => response.json())
    .toPromise();
  }

  getOneQuestion(index) {
    console.log('Reached services file');
    console.log('Index of selected question', index);
    return this._http.get('/api/getOneQuestion/')
    .map(response => response.json())
    .toPromise();
  }

}
