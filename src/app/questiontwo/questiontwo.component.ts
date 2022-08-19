import { Question } from '../question/question.model';
import { UserAnswer } from './user-answer.model';
import { QuestiontwoSelectorService } from '../questiontwo -selector/questiontwoselector.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { TmplAstRecursiveVisitor } from '@angular/compiler';
import { Animal } from '../animal/animal.model';

@Component({
  selector: 'app-questiontwo',
  templateUrl: './questiontwo.component.html',
  styleUrls: ['./questiontwo.component.css']
})
export class QuestiontwoComponent implements OnInit {

  respUser: Boolean;
  group: string
  options: string[] = ['true', 'false'];
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
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const group = this.route.snapshot.params['group'];
    this.getQuestionByGroup(group)

  }

  getQuestionByGroup(group) {

    this.questiontwoSelectorService.getQuestionByGroup(group, this.userAnswer).subscribe(res => {
      this.group = this.question.Group
      this.question = res
      
    })
  }
}

