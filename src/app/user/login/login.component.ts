import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: ''
  password: ''
  errorMessage: string = '';

  constructor(private userSerivce: UserService, private routes: Router) { }

  ngOnInit() {
  }

  sendLogin() {
    this.userSerivce.login(this.username, this.password)
        .subscribe(
          (response) => {
            if (response["loginStatus"]) {
              this.routes.navigateByUrl('teamList');
            } else {
              this.errorMessage = response["msg"];
            }
          }
        );
  }
}
