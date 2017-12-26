import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loggedUser;

  constructor(private _dataService: DataService, private _route: ActivatedRoute, private _router: Router) {
  }

  ngOnInit() {
    this.loggedUser = this._dataService.loggedUser;
  }

  logoutUser() {
    this.loggedUser = undefined;
    console.log('The loggedUser has been cleared');
  }


}
