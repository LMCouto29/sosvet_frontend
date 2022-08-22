import { Animal } from './../animal/animal.model';
import { Question } from '../question/question.model';
import { UserAnswer } from './user-answer.model';
import { QuestionService } from './../question/question.service';
import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalService } from '../animal/animal.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})

export class QuestionComponent implements OnInit {
  respUser: Boolean;

  options: string[] = [ 'true', 'false'];
  @Input() IdAnimal: "";

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

  constructor(private questionService: QuestionService,
    private router: Router, private route: ActivatedRoute, private animalService: AnimalService) { 

    const idAnimalUrl = this.route.snapshot.params['IdAnimal'];
    if (idAnimalUrl) {
      localStorage.setItem('idAnimal', idAnimalUrl);
    }
  }

  ngOnInit(): void {
    this.getQuestion();
  }

  getQuestion() { 

    var idAnimalLocalStorage = localStorage.getItem('idAnimal')

    this.getAnimalById(idAnimalLocalStorage);
    console.log('idAnimalLocalStorage' + idAnimalLocalStorage)
    this.getAnimalById(idAnimalLocalStorage);
    this.userAnswer.value = this.respUser;
    this.userAnswer.questionId = this.question.Id
    this.userAnswer.userId = idAnimalLocalStorage
    this.questionService.getQuestion(this.question, this.userAnswer).subscribe(res => {
      this.question = res
      
      if (this.question.IsLast == true || this.question?.Id == "" || this.userAnswer.value == true) {
        this.questionService.showMessage('Pré-Triagem criada!' + this.question.Message)
        this.router.navigate(['/animal'])

      } if (this.userAnswer.value == true)
        this.questionService.showMessage('Pré-Triagem criada!' + this.question.Message)

      this.router.navigate(['/question'])

    })
  }


  getAnimalById(idAnimal) {
    this.animalService.getAnimalById(idAnimal).subscribe(res => {
      this.animal = res
    })
  }

  cancel(): void {
    this.router.navigate(['/question'])
  }
}