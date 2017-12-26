import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-question',
  templateUrl: './show-question.component.html',
  styleUrls: ['./show-question.component.css']
})
export class ShowQuestionComponent implements OnInit {
  question;

  constructor(private _dataService: DataService, private _route: ActivatedRoute, private _router: Router) {
  }

  ngOnInit() {
    console.log('Reached show question component');
    this._dataService.getOneQuestion()
      .then((response) => {
        this.question = response.questionKey;
        console.log('Returned one question from db', this.question);
      });
  }
}
