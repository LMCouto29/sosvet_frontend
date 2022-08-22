import { ScreeningService } from '../Screeningservice';
import { Screening } from '../Screening.model';
import { Component, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-Screening-read',
  templateUrl: './Screening-read.component.html',
  styleUrls: ['./Screening-read.component.css']
})

export class ScreeningReadComponent implements OnInit {

  Screenings: Screening[]
  displayedColumns = [ 'animalname','ownername' ,'result','state',"color",'action']

  constructor(private ScreeningService: ScreeningService) { }

  ngOnInit(): void {
    this.ScreeningService.read().subscribe(Screenings => {
      this.Screenings = Screenings;
      console.log(Screenings)
    })
  }

}
