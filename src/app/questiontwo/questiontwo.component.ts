import { Question } from '../question/question.model';
import { UserAnswer } from './user-answer.model';
import { QuestiontwoSelectorService } from '../questiontwo -selector/questiontwoselector.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from '../animal/animal.model';
import { AnimalService } from '../animal/animal.service';
import { PreScreeningService } from './../preScreeningservice'
import { Screening } from '../Screening.model';
import { PreScreening } from '../preScreening.model';

@Component({
  selector: 'app-questiontwo',
  templateUrl: './questiontwo.component.html',
  styleUrls: ['./questiontwo.component.css']
})
export class QuestiontwoComponent implements OnInit {

  respUser: Boolean;
  group: string
  screening:Screening
  options: boolean[] = [true, false];
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
    private router: Router, private route: ActivatedRoute, private animalService: AnimalService, private preScreeningService : PreScreeningService) {
    const idAnimalUrl = this.route.snapshot.params['IdAnimal'];
    if (idAnimalUrl) {
      localStorage.setItem('idAnimal', idAnimalUrl);
    }
  }

  ngOnInit(): void {
    const group = this.route.snapshot.params['group'];
    this.getQuestionByGroup(group)

  }

  getByGroup(group) {
    var groupLocalStorage = localStorage.getItem('group')

    this.getgroup(groupLocalStorage);
    console.log('groupLocalStorage' + groupLocalStorage)
    this.getByGroup(groupLocalStorage);
    this.router.navigate([`/questiontwo/${group}`])
  }

  getQuestionByGroup(group) {
    var idAnimalLocalStorage = localStorage.getItem('idAnimal')
    this.getAnimalById(idAnimalLocalStorage);
    this.userAnswer.value = this.respUser;

    this.questiontwoSelectorService.getQuestionByGroup(group, this.question, this.userAnswer).subscribe(res => {
      this.group = this.question.Group
      this.question = res
      this.userAnswer.value = this.respUser;
      this.userAnswer.questionId = this.question.Id
      this.userAnswer.userId = idAnimalLocalStorage

      if (this.question.Id == "000000000000000000000000" && this.userAnswer.value == false) {
        this.questiontwoSelectorService.showMessage('Triagem criada!')
        this.router.navigate(['/Screening'])

        
      } if (this.question.Id == "000000000000000000000000" && this.userAnswer.value == true){
        this.questiontwoSelectorService.showMessage('Triagem criada!')

      this.router.navigate(['/Screening'])
    }
      

    }

    )
  }

  appointment(preScreening: PreScreening) {
    this.preScreeningService.appointment(preScreening).subscribe(prescreenings => {
      
    })
  }

  getgroup(group) {
    this.animalService.getAnimalById(group).subscribe(res => {
      this.animal = res
    })
  }

  getAnimalById(idAnimal) {
    this.animalService.getAnimalById(idAnimal).subscribe(res => {
      this.animal = res
    })
  }
}

