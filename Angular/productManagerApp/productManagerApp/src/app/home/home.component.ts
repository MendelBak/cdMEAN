import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {  
  constructor(private _dataService: DataService, private _route: ActivatedRoute) {
  this._route.paramMap.subscribe(params => {
    // console.log(params.get('id'));
  });
}
  ngOnInit() {
  }

}
