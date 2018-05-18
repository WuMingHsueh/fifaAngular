import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  configPath:string = 'assets/config.json';
  config;

  constructor(private http: HttpClient) {
    this.http.get(this.configPath).subscribe(result => {this.config = result});
  }

  getConfig() {
    return this.http.get(this.configPath);
  }
}
