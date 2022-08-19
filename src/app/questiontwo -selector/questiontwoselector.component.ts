import { Question } from '../question/question.model';
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

respUser: Boolean; 
options: string[] = ['respiratorio', 'cardiologico'];




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
    Group:"",
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
   this.userAnswer.value = this.respUser;
   this.userAnswer.questionId = this.question.Id
    this.questionService.getQuestion(this.question,this.userAnswer).subscribe(res=> {
      this.question = res
     
      if(this.question.IsLast == true || this.question?.Id == "" || this.userAnswer.value ==true){
        this.questionService.showMessage('Pré-Triagem criada!' + this.question.Message) 
        this.router.navigate(['/animal']  )
          
      } if(this.userAnswer.value == true)
      this.questionService.showMessage('Pré-Triagem criada!'+ this.question.Message) 


      this.router.navigate(['/questiontwo'])
     
    })

  }

  cancel(): void {
    this.router.navigate(['/questiontwo'])
  }
}



