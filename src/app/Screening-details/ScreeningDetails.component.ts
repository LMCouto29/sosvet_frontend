import { Animal } from '../animal/animal.model';
import { Question } from '../question/question.model';
import { UserAnswer } from '../question/user-answer.model';
import { QuestionService } from '../question/question.service';
import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScreeningService } from '../Screeningservice';
import { Screening } from '../Screening.model';

@Component({
  selector: 'app-ScreeningDetails',
  templateUrl: './ScreeningDetails.component.html',
  styleUrls: ['./ScreeningDetails.component.css']
})

export class ScreeningDetailsComponent implements OnInit {
  respUser: Boolean;

  
  Screenings: Screening[];
  animal: Animal

  constructor(private ScreeningService: ScreeningService,
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
    this.ScreeningService.read().subscribe(preScreenings => {
      this.Screenings = this.Screenings;
      
    })


  
}
}