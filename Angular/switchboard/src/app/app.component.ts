import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // x: Boolean = true;
  myArr: Array<any> = [
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    ];


  switchButton(idx) {
    console.log('Button has been pressed.');
    this.myArr[idx] = !this.myArr[idx];
  }

  }
