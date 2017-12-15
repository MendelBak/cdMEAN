import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private _dataService: DataService, private _route: ActivatedRoute, private _router: Router) {
    console.log('Hello from main.component.ts');
  }

  ngOnInit() {
  }

}
