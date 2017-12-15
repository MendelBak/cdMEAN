import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {

    // Inject Http
    constructor(private _http: Http) { }

  // getUsers() {
  //   this._http.get('http://localhost:4200/');
  // }
  registerUser(newUser) {
    console.log('reached registerUser function inside data.service.ts');
    console.log('this is the newUser parameter sent over from loginReg component ->', newUser);
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

}


// errorResponse => console.log(errorResponse)
