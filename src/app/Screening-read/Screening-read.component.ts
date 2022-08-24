import { ScreeningService } from '../Screeningservice';
import { Screening } from '../Screening.model';
import { Component, OnInit, Output } from '@angular/core';
import { DatePipe, DATE_PIPE_DEFAULT_TIMEZONE } from '@angular/common';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-Screening-read',
  templateUrl: './Screening-read.component.html',
  styleUrls: ['./Screening-read.component.css']
})

export class ScreeningReadComponent implements OnInit {

  id:string
  Screenings: Screening[]
  displayedColumns = [ 'animalname','ownername' ,'result','state',"color",'action']
  Screening: string;
screening:Screening = { 
  IdAnimal: "",
  objectId: "",
  state: "",
  result:  "",
  datePreScreening: "",
  animalname: "",
  ownerName: "",
  ownerContact:"",
  questao: "",
  resposta: "",
  Color : "",
  IdScreening: "",
}

  constructor(private ScreeningService: ScreeningService) { }

  ngOnInit(): void {
   this.readScreening()
  }




readScreening(){
  this.ScreeningService.read().subscribe(Screenings => {
  
    this.Screenings = Screenings;
    console.log(Screenings)
  })

}

  
appointment(screening: Screening) {
  this.ScreeningService.appointment(screening.objectId).subscribe(screenings => {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    screening.IdScreening = screening.objectId
    this.readScreening();
  })
    
    
    //chamar o serviço do appointment 
    // dentro do serviço deixar a função abaixo passado id - preScreening  
    // this.readPreScreening colocar dentro 
    // passo 2 -  HTML função para chamar appointment dentro do botão
    // passo 3 -  no backend filtrar para retornar isvisible = true.
    

  }

}

