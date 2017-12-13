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


  ngOnInit() {
    this.captainsLog = this._dataService.captainsLog;
  }

}
