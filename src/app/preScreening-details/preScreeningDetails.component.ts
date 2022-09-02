import { Animal } from '../animal/animal.model';
import {AnimalService } from '../animal/animal.service';
import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PreScreeningService } from '../preScreeningservice';
import { PreScreening } from '../preScreening.model';

@Component({
  selector: 'app-preScreeningDetails',
  templateUrl: '././preScreeningDetails.component.html',
  styleUrls: ['./preScreeningDetails.component.css']
})

export class PreScreeningDetailsComponent implements OnInit {
  respUser: Boolean;

  preScreenings: PreScreening[];
  animal: Animal
  preScreening: PreScreening
  public idAnimalUrl;
  constructor(private preScreeningService: PreScreeningService,
    private router: Router, private route: ActivatedRoute, private animalService: AnimalService) { 

      const idAnimalUrl = this.route.snapshot.params['IdAnimal'];
      if (idAnimalUrl) {
        localStorage.setItem('idAnimal', idAnimalUrl);
      }
  }

  ngOnInit(): void {
    this.readPreScreening();
    const idAnimal = this.route.snapshot.params['IdAnimal'];
  }

  getAnimalById(IdAnimal) {
    this.animalService.getAnimalById(IdAnimal).subscribe(res => {
      this.animal = res
    })
  }

  

  readPreScreening() {
    this.preScreeningService.read().subscribe(preScreenings => {
      this.preScreenings = preScreenings;
      
    })


  
}
}