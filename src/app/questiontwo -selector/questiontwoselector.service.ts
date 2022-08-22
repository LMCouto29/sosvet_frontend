import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Question } from "./questiontwo.model";
import { UserAnswer } from "./user-answer.model"
import { Observable, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { group } from "@angular/animations";

@Injectable({
  providedIn: "root",
})
export class QuestiontwoSelectorService {

  baseUrl = "https://sosvet-api.herokuapp.com/api/question/Group";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  getQuestionByGroup(group: string, Question:Question, userAnswer: UserAnswer): Observable<Question> {
    
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }

    const url = `${this.baseUrl}/${group}`;
    return this.http.post<Question>(url, userAnswer, httpOptions).pipe(
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
