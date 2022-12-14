import { ScreeningService } from '../Screeningservice';
import { Screening } from '../Screening.model';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-Screening-read',
  templateUrl: './Screening-read.component.html',
  styleUrls: ['./Screening-read.component.css']
})

export class ScreeningReadComponent implements OnInit {

  id: string
  Screenings: Screening[]
  displayedColumns = ['animalname', 'ownername', 'result', 'state', "color", 'action']
  Screening: string;
  

  constructor(private ScreeningService: ScreeningService) { }

  ngOnInit(): void {
    this.readScreening()
  }

  readScreening() {
    this.ScreeningService.read().subscribe(Screenings => {

      this.Screenings = Screenings;
    })

  }

  appointment(screening: Screening) {
    this.ScreeningService.appointment(screening).subscribe(screenings => {
      this.readScreening();
    })
  }
}
