import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-tasks',
  templateUrl: './home-tasks.component.html',
  styleUrls: ['./home-tasks.component.css']
})
export class HomeTasksComponent implements OnInit {
      constructor(private _route: ActivatedRoute) {

            this._route.paramMap.subscribe( params => {
                 console.log(params.get('id'));
            });
      }

      ngOnInit() { }
 }
