import { Animal } from '../animal.model';
import { AnimalService } from './../animal.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animal-create',
  templateUrl: './animal-create.component.html',
  styleUrls: ['./animal-create.component.css']
})
export class AnimalCreateComponent implements OnInit {

  animal: Animal = {
    IdAnimal: "",
    Name: "",
    Spicies: "",
    Breed : "",
    Age:0,
    Owner:"",
    Contact:"",
  }

  constructor(private animalService: AnimalService,
      private router: Router) { }

  ngOnInit(): void {
    
  }

  createAnimal(): void {
    this.animalService.create(this.animal).subscribe(() => {
      this.animalService.showMessage('Animal criado!')
      this.router.navigate(['/animal'])
    })

  }

  cancel(): void {
    this.router.navigate(['/animal'])
  }
}
