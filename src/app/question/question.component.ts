import { Question } from '../question/question.model';
import { UserAnswer } from './user-answer.model'; 
import { QuestionService } from './../question/question.service';
import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})

export class QuestionComponent implements OnInit {
respUser: Boolean; 
options: string[] = ['true', 'false'];
@Input() IdAnimal : "";


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
  public idAnimalUrl;
 
    constructor(private questionService: QuestionService,
    private router: Router, private route: ActivatedRoute) {
      //this.route.params.subscribe(params => this.idAnimalUrl = params['idAnimalUrl']);
       
      console.log('O Animal tem o Id' + this.idAnimalUrl)
     }

     

      ngOnInit(): void {
 // const id = this.route.snapshot.params['IdAnimal'];
  //console.log('IdAnimal' + id)
  this.getQuestion();
      
}


getQuestion() { // mudar GET para get
  this.route.params.subscribe(params => {

    this.idAnimalUrl = params['idAnimalUrl']
  this.userAnswer.value = this.respUser;
  this.userAnswer.questionId = this.question.Id
  this.userAnswer.userId = this.idAnimalUrl
   this.questionService.getQuestion(this.question,this.userAnswer).subscribe(res=> {
     this.question = res
     if(this.question.IsLast == true || this.question?.Id == "" || this.userAnswer.value ==true){
       this.questionService.showMessage('Pré-Triagem criada!' + this.question.Message) 
       this.router.navigate(['/animal']  )
         
     } if(this.userAnswer.value == true)
     this.questionService.showMessage('Pré-Triagem criada!'+ this.question.Message) 


     this.router.navigate(['/question'])
    
   })
  })
}
  

  cancel(): void {
    this.router.navigate(['/question'])
  }
}




