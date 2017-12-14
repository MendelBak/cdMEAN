import { Component } from '@angular/core';
import { DataService } from './data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _dataService: DataService, private _route: ActivatedRoute) {
    this._route.paramMap.subscribe(params => {
      // console.log(params.get('id'));
    });
  }

}
