import { Question } from '../question/question.model';
import { UserAnswer } from './user-answer.model';
import { QuestiontwoSelectorService } from '../questiontwo -selector/questiontwoselector.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { TmplAstRecursiveVisitor } from '@angular/compiler';


@Component({
  selector: 'app-questiontwo-selector',
  templateUrl: './questiontwoselector.component.html',
  styleUrls: ['./questiontwoselector.component.css']
})
export class QuestiontwoselectorComponent implements OnInit {

  respUser: Boolean
  group: string

  userAnswer: UserAnswer = {
    value: false,
    userId: "",
    questionId: ""
  }

  question: Question = {
    Id: "",
    Description: "",
    IsPreScreening: true,
    IsLast: true,
    Order: 0,
    Group: "",
    NextQuestion: 0,
    Message: "",
    Answers: true,
  }

  constructor(private questiontwoSelectorService: QuestiontwoSelectorService,
    private router: Router) { }

  ngOnInit(): void {

  }

  getQuestionByGroup(group) {
    
      this.router.navigate([`/questiontwo/${group}`])
  }

}








