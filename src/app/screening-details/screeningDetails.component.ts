import { Animal } from '../animal/animal.model';
import { AnimalService } from '../animal/animal.service';
import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScreeningService } from '../Screeningservice';
import { Screening } from '../Screening.model';

@Component({
  selector: 'app-screeningDetails',
  templateUrl: '././screeningDetails.component.html',
  styleUrls: ['./screeningDetails.component.css']
})

export class ScreeningDetailsComponent implements OnInit {
  respUser: Boolean;

  screenings: Screening[];
  animal: Animal
  screening: Screening
  public idAnimalUrl;
  constructor(private screeningService: ScreeningService,
    private router: Router, private route: ActivatedRoute, private animalService: AnimalService) {

    const idAnimalUrl = this.route.snapshot.params['IdAnimal'];
    if (idAnimalUrl) {
      localStorage.setItem('idAnimal', idAnimalUrl);
    }
  }

  ngOnInit(): void {
    const idScreening = this.route.snapshot.params['IdPreScreening'];
    this.getScreeningById(idScreening)
    const idAnimal = this.route.snapshot.params['IdAnimal'];
    this.getAnimalById(idAnimal);
  }

  getAnimalById(IdAnimal) {
    this.animalService.getAnimalById(IdAnimal).subscribe(res => {
      this.animal = res
    })
  }

  

  getScreeningById(id) {
    this.screeningService.getScreeningById(id).subscribe(res => {
      this.screening = res
    })
  }

  readScreening() {
    this.screeningService.read().subscribe(Screenings => {
      this.screenings = Screenings;

    })

  }

  cancel(): void {
    this.router.navigate(["/Screening"]);
  }


  appointment(screening: Screening) {
    this.screeningService.appointment(screening).subscribe(screenings => {
      this.readScreening();
      this.router.navigate(["/Screening"]);
    })
  }

}