import { Animal } from './../animal.model';
import { Router, ActivatedRoute } from '@angular/router';
import { AnimalService } from './../animal.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-update',
  templateUrl: './animal-update.component.html',
  styleUrls: ['./animal-update.component.css']
})
export class AnimalUpdateComponent implements OnInit {

  animal: Animal

  constructor(private animalService: AnimalService, 
      private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.animalService.readById(id).subscribe(animal => {
      this.animal = animal
    })
  }

  updateAnimal(): void {
    this.animalService.update(this.animal).subscribe(() => {
      this.animalService.showMessage(`O animal ${this.animal.Name} foi atualizado com sucesso!`)
      this.router.navigate(['/animal'])
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}

function id(id: any) {
  throw new Error('Function not implemented.');
}
