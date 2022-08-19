import { Question} from '../questiontwo/questiontwo.model';
import { UserAnswer } from './user-answer.model'; 
import { QuestionService } from '../question/question.service';
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


options: string;




userAnswer:UserAnswer = {

  value : false,
  userId:"",
  questionId:""

}

  question: Question = {
    Id: "",
    Description: "",
    IsPreScreening: true,
    IsLast : true,
    Order:0,
    Group: "",
    NextQuestion:0,
    Message:"",
    Answers: true,
    
  }

  


  constructor(private questionService: QuestionService,
    private router: Router) { }

ngOnInit(): void {
  this.getQuestion();

      
}


getQuestion() { // mudar GET para get
   this.getQuestion()
    var Group = localStorage.getItem('Group')
    this.question.Group = this.options;
 
  }

  cancel(): void {
    this.router.navigate(['/questiontwo'])
  }
}




