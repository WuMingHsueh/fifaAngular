import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IConfig } from './iconfig';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private configPath: string = 'assets/config.json';
  private config: IConfig;

  constructor(private http: HttpClient) { }

  getConfig(): IConfig {
    return this.config;
  }

  configSubscribe(): Observable<IConfig> {
    return this.http.get<IConfig>(this.configPath);
  }
}

