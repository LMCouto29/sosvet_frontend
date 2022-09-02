import { ScreeningService } from './../../Screeningservice';
import { AnimalService } from './../../animal/animal.service';
import { HeaderService } from '../template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { PreScreeningService } from './../../preScreeningservice'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  countAnimal = 0;
  countPreScreenning = 0;
  countScreenning = 0;

  constructor(private headerService: HeaderService, private animalService: AnimalService, private preScreenningService: PreScreeningService, private screeningService: ScreeningService) {
    headerService.headerData = {
      title: 'Início',
      icon: 'home',
      routeUrl: '/'
    }
  }

  ngOnInit(): void {
    this.getStats();
  }

  getStats() {
    this.getAnimals();
    this.getPreScreenning();
    this.getScreenning();
  }

  getAnimals() {
    this.animalService.read().subscribe(animal => {
      this.countAnimal = animal.length;
      console.log(animal)
    })
  }

  getPreScreenning() {
    this.preScreenningService.read().subscribe(preScreening => {
      this.countPreScreenning = preScreening.length;
      console.log(preScreening)
    })
  }

  getScreenning() {
    this.screeningService.read().subscribe(screening => {
      this.countScreenning = screening.length;
      console.log(screening)
    })
  }

}
