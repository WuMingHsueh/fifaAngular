import { UserService } from './../../user/user.service';
import { FifaTeamService } from './../fifa-team.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {
  get userName() {
      return this.userService.loginUser;
  }

  constructor(private router: Router,
              private fifaTeam: FifaTeamService,
              private userService: UserService) { }

  ngOnInit() {
  }

}
