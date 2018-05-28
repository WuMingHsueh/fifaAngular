import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from './../../user/user.service';
import { FifaTeamService } from './../fifa-team.service';
import { Observable } from 'rxjs';
import { TeamDetail } from '../team-detail';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {
  codeId: string = '';
  teamDetail$: Observable<TeamDetail>;

  constructor(private router: Router,
    private routerActive: ActivatedRoute,
    private fifaTeam: FifaTeamService,
    private userService: UserService) { }

  ngOnInit() {
    this.getUrlPathId();
    this.initTeamDetailData();
  }

  getUrlPathId() {
    this.routerActive.params.subscribe(query => this.codeId = query["id"]);
  }

  initTeamDetailData() {
    if ( this.userService.isLoggined && this.codeId ) {
      this.teamDetail$ = this.fifaTeam.getTeamDetail(this.codeId);
    } else {
      this.router.navigateByUrl('/login');
    }
  }
}
