import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { Question } from "./question.model";
import{ UserAnswer } from "./user-answer.model"
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class QuestionService {
  [x: string]: any;

 
  baseUrl = "https://sosvet-api.herokuapp.com/api/question/Start";
  
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  

  getQuestion(question:Question,userAnswer:UserAnswer): Observable<Question> {
    return this.http.post<Question>(this.baseUrl,userAnswer).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }


  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }


  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
