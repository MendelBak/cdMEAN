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
  newUser = { 'username': '', 'email': '', 'password': '' };
  errorMessage = '';
  loggedUser = {}; // This is the logged in user.
  allUsers = [];

  constructor(private _dataService: DataService, private _route: ActivatedRoute, private _router: Router) {
    console.log('Hello from .component.ts');
  }

  ngOnInit() {
  }

  formSubmit() {
    console.log('Hello there from formsubmit function');
    console.log('This is the newUser submitted from the form ->', this.newUser);
    this._dataService.registerUser(this.newUser)
      .then((response) => {
        this.loggedUser = response;
        console.log(this.loggedUser);
      })
      .catch(err => this.errorMessage = err.error);
    console.log(this.errorMessage);
  }

  getAllUsers() {
    console.log('Reached the getAllUsers function in loginReg component.ts');
    this._dataService.getAllUsers()
    .then((response) => {
      this.allUsers.push(response);
      console.log('This is all the users in the database ->', this.allUsers);
    });
  }

}
