import { Screening } from './../Screening.model';
import { PreScreeningService } from '../preScreeningservice';
import { PreScreening } from '../preScreening.model';
import { Component, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-preScreening-read',
  templateUrl: './preScreening-read.component.html',
  styleUrls: ['./preScreening-read.component.css']
})

export class PreScreeningReadComponent implements OnInit {

  preScreenings: PreScreening[]
  displayedColumns = [ 'animalname','ownername' ,'result','state','action']

  constructor(private preScreeningService: PreScreeningService) { }

  ngOnInit(): void {
    this.preScreeningService.read().subscribe(preScreenings => {
      this.preScreenings = preScreenings;
      console.log(preScreenings)
    })
  }

  appointment(screening: Screening) {
    // Mudar para PreScreening
    // this.ScreeningService.appointment(screening).subscribe(screenings => {
    //   this.readScreening(); 
    // })
  }

}
