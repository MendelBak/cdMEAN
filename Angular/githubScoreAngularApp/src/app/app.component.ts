import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  username: string = null;
  score = 0;
  userExists = null;
  results: number[] = [];
  errors = '';
  // Inject Data Service
  constructor(private _dataService: DataService) {}

  ngOnInit() {
  }

  getGithubScore() {
    console.log(this.username);
    this._dataService.getGithubScore(this.username)
    // data is a variable that is being created now. It is being passed data from the API call after the promise has been fulfilled.
    .then( (data) => {
      this.score = data.followers + data.public_repos;
      this.results = data;
    if (data.id) {
      this.userExists = true;
    } else {
      this.userExists = false;
    }
    })
    .catch(errors => {
      this.errors = errors;
      this.userExists = false;
    });
  }


  }
