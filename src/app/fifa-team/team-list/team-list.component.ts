import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FifaTeamService } from './../fifa-team.service';
import { ConfigService } from '../../config.service';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  teamList$: Observable<any[]>;

  constructor(public fifaTeam: FifaTeamService, public userService: UserService) { }

  ngOnInit() {
    this.teamList$ = this.fifaTeam.getTeamList();
  }
}
