import { Router } from '@angular/router';
import { User } from './user.model';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {
    username: '',
    password: ''
  }

  constructor(private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.user.username);

    if (this.user.password === "123") {
      this.router.navigate(['/'])
    } else {
      this.showMessage("Login ou senha inválidos", true);
    }
  }

  clear() {
    this.user.username = '';
    this.user.password = '';
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

}
