import { AnimalService } from '../animal.service';
import { Animal } from '../animal.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-read',
  templateUrl: './animal-read.component.html',
  styleUrls: ['./animal-read.component.css']
})
export class AnimalReadComponent implements OnInit {

  animals: Animal[]
  displayedColumns = ['name', 'spicies', 'breed', 'owner','contact','action']

  constructor(private animalService: AnimalService) { }

  ngOnInit(): void {
    this.animalService.read().subscribe(animals => {
      this.animals = animals;
      console.log(animals)
    })
  }

}
