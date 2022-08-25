import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { PreScreening } from "./preScreening.model";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { PreScreeningAppointment } from "./preScreeningAppointment.model";

@Injectable({
  providedIn: "root",
})
export class PreScreeningService {
   //baseUrl = "https://localhost:44379/api/Animal";
  baseUrl = "https://sosvet-api.herokuapp.com/api/PreScreening";
  
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  read(): Observable<PreScreening[]> {
    return this.http.get<PreScreening[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  appointment(prescreening: PreScreening): Observable<PreScreening[]> {

    const prescreeningAppointment = {} as PreScreeningAppointment;
    prescreeningAppointment.IdPre = prescreening.IdPreScreening;
    
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    const url = `${this.baseUrl}/Start`
    return this.http.post<PreScreening[]>(url, prescreeningAppointment, httpOptions).pipe(
      map((obj) => {
        obj;
        this.showMessage('Animal chamado para a consulta!')
      }),
      catchError((e) => this.errorHandler(e))
    )
  }


  delete(id: number): Observable<PreScreening> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<PreScreening>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
