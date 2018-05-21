import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ConfigService } from '../config.service';
import { IConfig } from './../iconfig';
import { Team } from './team';

@Injectable({
  providedIn: 'root'
})
export class FifaTeamService {
  teamListUrl: string = 'phpAPI/team.php';;
  tesamDetailUrl: string;

  constructor(private configService: ConfigService, private http: HttpClient) {  }

  getTeamList(): Observable<Team[]> {
    return this.http.get<Team[]>(this.teamListUrl)
    .pipe( // 針對team的rank做排序
      map( (result: Team[]) =>
        result.sort( (a:Team ,  b:Team) => ( a.rank < b.rank)? -1 : 1 )
      )
    );
  }
}
