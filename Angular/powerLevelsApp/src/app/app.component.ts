import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  numOfUnits: Number;

  constructor() { }

  ngOnInit() {
    this.numOfUnits = 1;
  }

  onSubmit() {
    console.log('button is reading in app.components.ts');
    console.log(this.numOfUnits);
  }

}
