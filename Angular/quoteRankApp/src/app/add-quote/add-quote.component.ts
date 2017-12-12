import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {

  @Output() quoteEvent = new EventEmitter();
  quote = { quote: '', author: ''};


  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    // Send data up to root app component to be passed into list-quote component
    this.quoteEvent.emit(this.quote);
    this.quote = { quote: '', author: ''};
  }

}
