import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login-reg',
  templateUrl: './login-reg.component.html',
  styleUrls: ['./login-reg.component.css']
})
export class LoginRegComponent implements OnInit {
  newUser: any= { 'username': ''};
  errorMessage = '';
  loggedUser; // This is the logged in user.
  allUsers; // Stores all users retrieved from the db.
  sessionUser; // Correcty stores session data but I am having trouble retrieving that data.
  // It shows as JSON object but I cannot read it for some reason.

  constructor(private _dataService: DataService, private _route: ActivatedRoute, private _router: Router) {
    console.log('Hello from loginreg.component.ts');
  }

  ngOnInit() {
    this.loggedUser = this._dataService.loggedUser;
  }

  formSubmit() {
    if (this.loggedUser === undefined) {
      this._dataService.registerUser(this.newUser)
      .then((response) => {
        this.loggedUser = response;
        sessionStorage.setItem('sessionKey', this.newUser);
        this._dataService.loggedUser = this.newUser;
        this.sessionUser = sessionStorage.getItem('sessionKey');
        console.log('This is supposed to show the session user', this.sessionUser);
      })
      .catch(err => this.errorMessage = err.error);
    } else if (this.loggedUser !== undefined ) {
      console.log('There is already a logged in user. You cannot login until the other user has logged out.');
      return;
    }
  }

  getAllUsers() {
    console.log('Reached the getAllUsers function in loginReg component.ts');
    this._dataService.getAllUsers()
    .then((response) => {
      // userKey is the key that holds the data retrieved from the db in the controller which makes the actual db query.
      this.allUsers = response.userKey;
      console.log('This is all the users in the database ->', this.allUsers);
    });
  }

}
