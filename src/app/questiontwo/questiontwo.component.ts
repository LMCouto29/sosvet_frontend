

import { Question } from '../question/question.model';
import { UserAnswer } from './user-answer.model';
import { QuestiontwoSelectorService } from '../questiontwo -selector/questiontwoselector.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { TmplAstRecursiveVisitor } from '@angular/compiler';
import { Animal } from '../animal/animal.model';
import { AnimalService } from '../animal/animal.service';

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
  public idAnimalUrl;

  animal: Animal;
  constructor(private questiontwoSelectorService: QuestiontwoSelectorService,
    private router: Router, private route: ActivatedRoute , private animalService: AnimalService) {
      const idAnimalUrl = this.route.snapshot.params['IdAnimal'];
      if (idAnimalUrl) {
        localStorage.setItem('idAnimal', idAnimalUrl);
      }
     }

  ngOnInit(): void {
    const group = this.route.snapshot.params['group'];
    this.getQuestionByGroup(group)

  }

  getQuestionByGroup(group) {
    var idAnimalLocalStorage = localStorage.getItem('idAnimal')
    this.getAnimalById(idAnimalLocalStorage);
    console.log('idAnimalLocalStorage' + idAnimalLocalStorage)
    this.getAnimalById(idAnimalLocalStorage);
    this.questiontwoSelectorService.getQuestionByGroup(group,this.question, this.userAnswer).subscribe(res => {
      this.group = this.question.Group
      this.question = res
      var idAnimalLocalStorage = localStorage.getItem('idAnimal')

    this.getAnimalById(idAnimalLocalStorage);
    console.log('idAnimalLocalStorage' + idAnimalLocalStorage)
    this.getAnimalById(idAnimalLocalStorage);
    this.userAnswer.value = this.respUser;
    this.userAnswer.questionId = this.question.Id
    this.userAnswer.userId = idAnimalLocalStorage
    this.questiontwoSelectorService.getQuestionByGroup(this.group,this.question, this.userAnswer).subscribe(res => {

      


    })
      
    })
  }
  getAnimalById(idAnimal) {
    this.animalService.getAnimalById(idAnimal).subscribe(res => {
      this.animal = res
    })
  }
}

