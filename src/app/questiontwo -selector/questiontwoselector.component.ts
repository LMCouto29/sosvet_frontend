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
  selector: 'app-questiontwo-selector',
  templateUrl: './questiontwoselector.component.html',
  styleUrls: ['./questiontwoselector.component.css']
})
export class QuestiontwoselectorComponent implements OnInit {

  respUser: Boolean
  group: string
  public idAnimalUrl;
  animal: Animal;

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
    private router: Router, private route: ActivatedRoute, private animalService: AnimalService) {
    const idAnimalUrl = this.route.snapshot.params['IdAnimal'];
    if (idAnimalUrl) {
      localStorage.setItem('idAnimal', idAnimalUrl);
    }
  }

  ngOnInit(): void {
    const idAnimal = this.route.snapshot.params['IdAnimal'];
    this.getAnimalById(idAnimal);
  }

  getQuestionByGroup(group) {
    var idAnimalLocalStorage = localStorage.getItem('idAnimal')

    this.getAnimalById(idAnimalLocalStorage);
    console.log('idAnimalLocalStorage' + idAnimalLocalStorage)
    this.getAnimalById(idAnimalLocalStorage);
    this.router.navigate([`/questiontwo/${group}`])
  }

  getByGroup(group) {
    var groupLocalStorage = localStorage.getItem('group')

    this.getgroup(groupLocalStorage);
    console.log('groupLocalStorage' + groupLocalStorage)
    this.getByGroup(groupLocalStorage);
    this.router.navigate([`/questiontwo/${group}`])
  }

  getAnimalById(idAnimal) {
    this.animalService.getAnimalById(idAnimal).subscribe(res => {
      this.animal = res
    })
  }

  getgroup(group) {
    this.animalService.getAnimalById(group).subscribe(res => {
      this.animal = res
    })
  }

}








