import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ConfigService } from '../config.service';

@Injectable({
  providedIn: 'root'
})
export class FifaTeamService {
  teamListUrl: string;
  tesamDetailUrl: string;

  constructor(private config: ConfigService, private http: HttpClient) {
    this.subscribeConfig();
  }

  subscribeConfig() {
    this.config.getConfig().subscribe(
      result => {
        this.teamListUrl = result.apiUrl.teamList;
        this.tesamDetailUrl = result.apiUrl.teamDetail;
      }
    );
  }

  getTeamList() {
    return this.http.get(this.teamListUrl);
  }

}
