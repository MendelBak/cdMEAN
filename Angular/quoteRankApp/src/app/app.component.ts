import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes: Array<Object> = [];

  quoteFromChild(eventData) {
    console.log('Output working!', eventData);
    this.quotes.push(eventData);
    console.log(this.quotes);
  }
}
