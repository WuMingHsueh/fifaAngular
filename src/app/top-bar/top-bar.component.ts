import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from './../user/user.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  get isloggined() : boolean { return this.userService.isLoggined; }
  get loginUser() : string { return this.userService.loginUser; }

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  doLogout() {
    this.userService.logout().subscribe();
    this.router.navigateByUrl('/');
  }

}
