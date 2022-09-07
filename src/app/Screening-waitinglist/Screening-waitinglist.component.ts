import { ScreeningService } from '../Screeningservice';
import { Screening } from '../Screening.model';
import { Component, OnInit, Output } from '@angular/core';
import { QRCodeModule } from 'angularx-qrcode';

@Component({
  selector: 'app-Screening-waitinglist-read',
  templateUrl: './Screening-waitinglist.component.html',
  styleUrls: ['./Screening-waitinglist.css']
})

export class ScreeningwaitinglistComponent implements OnInit {

  id: string
  Screenings: Screening[]
  displayedColumns = ['animalname', 'ownername', 'result', 'state', "color"]
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
