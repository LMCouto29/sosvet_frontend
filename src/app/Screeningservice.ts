import { ScreeningAppointment } from './ScreeningAppointment.model';
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Screening } from "./Screening.model";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})


export class ScreeningService {
  //baseUrl = "https://localhost:44379/api/Animal";
  baseUrl = "https://sosvet-api.herokuapp.com/api/Screening";

  Start: ""
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }



  read(): Observable<Screening[]> {
    return this.http.get<Screening[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }



  appointment(screening: Screening): Observable<Screening[]> {

    const screeningAppointment = {} as ScreeningAppointment;
    screeningAppointment.IdScreening = screening.objectId;
    
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    const url = `${this.baseUrl}/Start`
    return this.http.post<Screening[]>(url, screeningAppointment, httpOptions).pipe(
      map((obj) => {
        obj;
        this.showMessage('Animal chamado para a consulta!')
      }),
      catchError((e) => this.errorHandler(e))
    )
    
  }

  getScreeningById (id: number): Observable<Screening> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Screening>(url).pipe(
      map((obj) => obj),
      catchError((e) =>  this.errorHandler(e))
    ); 
  }


  delete(id: number): Observable<Screening> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Screening>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
  
}
