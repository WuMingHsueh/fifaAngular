
import { Component, OnInit } from '@angular/core';

import { FifaTeamService } from './../fifa-team.service';
import { ConfigService } from '../../config.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  teamList;

  constructor(public fifaTeam: FifaTeamService) { }

  ngOnInit() {
    this.fifaTeam.getTeamList().subscribe(teamList => this.teamList = teamList);
    console.log(this.teamList);
  }
}
