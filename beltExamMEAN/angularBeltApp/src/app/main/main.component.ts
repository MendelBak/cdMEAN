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
  loggedUser;
  questions;

  constructor(private _dataService: DataService, private _route: ActivatedRoute, private _router: Router) {
    console.log('Hello from main.component.ts');
  }

  ngOnInit() {
    this.loggedUser = this._dataService.loggedUser;
    this._dataService.getQuestions()
      .then((response) => {
        this.questions = response.questionKey;
        console.log('Returned all questions in db', this.questions);
      });
  }

 showQuestion(idx) {
   this._dataService.getOneQuestion(idx);
  this._router.navigateByUrl('/showQuestion/');
  }


}
