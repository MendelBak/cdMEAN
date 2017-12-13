import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  captainsLog: Array<String> = [];

  constructor(private _dataService: DataService) { }

// Why does this work to display the log dynamically?
// I thought OnInit only checks once, when the page (or element) initializes for the first time!
  ngOnInit() {
    this.captainsLog = this._dataService.captainsLog;
  }

}
