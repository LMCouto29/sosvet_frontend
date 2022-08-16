import { Animal } from "../animal.model";
import { Router, ActivatedRoute } from "@angular/router";
import { AnimalService } from "../animal.service";
import { Component, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-animal-update",
  templateUrl: "./animal-update.component.html",
  styleUrls: ["./animal-update.component.css"],
})
export class AnimalUpdateComponent implements OnInit {

  animal: Animal; 

  constructor(
    private animalService: AnimalService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  
  
  ngOnInit(): void {
    const id = this.route.snapshot.params['IdAnimal'];
    this.animalService.readById(id).subscribe((animal) => {
      this.animal = animal;
    });
  }

  updateAnimal(): void {
    this.animalService.update(this.animal).subscribe(() => {
      this.animalService.showMessage("Dados do animal atualizado com sucesso!");
      this.router.navigate(["/animal"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/animal"]);
  }
}
