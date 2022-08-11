import { HeaderService } from '../template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animal-crud',
  templateUrl: './animal-crud.component.html',
  styleUrls: ['./animal-crud.component.css']
})
export class AnimalCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Registo do Pet',
      icon: 'text_snippet',
      routeUrl: '/animal'
    }
   }

  ngOnInit(): void {
  }

  navigateToAnimalCreate(): void {
    this.router.navigate(['/animal/create']);
   }

}
