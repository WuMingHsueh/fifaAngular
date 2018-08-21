import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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

  constructor(private router:Router, private activatedRoute: ActivatedRoute, private userSerivce: UserService) { }

  ngOnInit() {
  }

  sendLogin() {
    this.userSerivce.login(this.username, this.password)
        .subscribe(
          response => {
            if (this.activatedRoute.snapshot.queryParams["code"]) {
              this.router.navigate(['/', 'teamDetail', this.activatedRoute.snapshot.queryParams["code"]]);
            } else {
              this.router.navigate(['']);
            }
          }
          ,
          errors => this.errorMessage = errors["msg"]
        );
  }
}
