import { Animal } from '../animal/animal.model';
import { Question } from '../question/question.model';
import { UserAnswer } from '../question/user-answer.model';
import { QuestionService } from '../question/question.service';
import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PreScreeningService } from '../preScreeningservice';
import { PreScreening } from '../preScreening.model';

@Component({
  selector: 'app-preScreeningDetails',
  templateUrl: './preScreeningDetails.component.html',
  styleUrls: ['./preScreeningDetails.component.css']
})

export class preScreeningDetailsComponent implements OnInit {
  respUser: Boolean;

  
  preScreenings: PreScreening[];
  animal: Animal

  constructor(private preScreeningService: PreScreeningService,
    private router: Router, private route: ActivatedRoute) { 

    const idAnimalUrl = this.route.snapshot.params['IdAnimal'];
    if (idAnimalUrl) {
      localStorage.setItem('idAnimal', idAnimalUrl);
    }
  }

  ngOnInit(): void {
    this.readPreScreening();
  }

  

  readPreScreening() {
    this.preScreeningService.read().subscribe(preScreenings => {
      this.preScreenings = preScreenings;
      
    })


  
}
}