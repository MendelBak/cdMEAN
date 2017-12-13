import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-bravo',
  templateUrl: './bravo.component.html',
  styleUrls: ['./bravo.component.css']
})
export class BravoComponent implements OnInit {
  data: any[] = [];

  constructor(private _taskService: TaskService) { }

  ngOnInit() {

  }

}
