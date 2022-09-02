import { AnimalService } from '../animal.service';
import { Animal } from '../animal.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-animal-read',
  templateUrl: './animal-read.component.html',
  styleUrls: ['./animal-read.component.css']
})

export class AnimalReadComponent implements OnInit {

  animals: Animal[]
  filteredArray: Animal[]
  displayedColumns = ['name', 'spicies', 'breed', 'owner','contact','action']

  searchFilter: string = '';

  constructor(private animalService: AnimalService) { }

  ngOnInit(): void {
    this.getAnimals();
  }

  getAnimals() {
    this.animalService.read().subscribe(animals => {
      this.animals = animals;
      this.filteredArray = animals;
    })
  }

  @Output()
  searchFilterTextChanged: EventEmitter<String> = new EventEmitter<String>();

  onSearchFilterTextChanged() {
    this.filteredArray = this.animals.filter((animal) => {
      if (animal.Name == null || animal.Name === undefined) {
        animal.Name = '';
      }
        return animal.Name.toLowerCase().indexOf(this.searchFilter.toLowerCase()) >= 0; 
      
    });
    this.searchFilterTextChanged.emit(this.searchFilter)
  }
}

