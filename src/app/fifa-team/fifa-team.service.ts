import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment';

import { Team } from './team';
import { TeamDetail } from './team-detail';


@Injectable({
  providedIn: 'root'
})
export class FifaTeamService {
  private teamListUrl: string = '';
  private teamDetailUrl: string = '';

  constructor(private http: HttpClient) {
    this.initApiUrl();
  }

  initApiUrl() {
    this.teamListUrl = environment.ApiUrlConfig.teamList;
    this.teamDetailUrl = environment.ApiUrlConfig.teamDetail;
  }

  getTeamList(): Observable<Team[]> {
    return this.http.get<Team[]>(this.teamListUrl)
    .pipe( // 針對team的rank做排序
      map( (result: Team[]) =>
        result.sort( (a:Team ,  b:Team) => ( a.rank < b.rank)? -1 : 1 )
      )
    );
  }

  getTeamDetail(codeId): Observable<TeamDetail> {
    return this.http.get<TeamDetail>(this.teamDetailUrl + '/' + codeId);
  }
}
