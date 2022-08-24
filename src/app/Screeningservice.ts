import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { Screening } from "./Screening.model";
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})


export class ScreeningService {
   //baseUrl = "https://localhost:44379/api/Animal";
  baseUrl = "https://sosvet-api.herokuapp.com/api/Screening";
  
 
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

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


  appointment(screening): Observable<Screening[]> {
    const url = `${this.baseUrl}/${"Start"}`
    return this.http.post<Screening[]>(this.baseUrl, screening).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
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
