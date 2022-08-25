import { PreScreening } from './../preScreening.model';
import { PreScreeningService } from './../preScreeningservice'
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
    this.readPreScreening
    
  }

  readPreScreening() {
    this.preScreeningService.read().subscribe(preScreenings => {
      this.preScreenings = preScreenings;
      
    })

  }

  appointment(preScreening: PreScreening) {
    this.preScreeningService.appointment(preScreening).subscribe(prescreenings => {
      this.readPreScreening();
    })
  }
}