import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {
  newQuestion = {'questionText': '', 'commentText': ''};
  errorMessage;

  constructor(private _dataService: DataService, private _route: ActivatedRoute, private _router: Router) {
  }

  ngOnInit() {
  }

  submitQuestion() {
    if (this.newQuestion.commentText.length >= 10) {
      this._dataService.submitQuestion(this.newQuestion)
      .then((response) => {
        this.newQuestion = response;
        console.log('Received response from service');
        console.log('This is the response from the service', response);
      })
      .catch(err => this.errorMessage = err.error);
      console.log(this.errorMessage);
    }

  }

}
