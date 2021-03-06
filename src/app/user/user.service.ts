import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, throwError, observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { environment } from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService implements CanActivate {
  isLoggined: boolean = false;
  loginUser: string = '';

  private loginUrl: string = '';
  private logoutUrl: string = '';
  private regiserUrl: string = '';
  private checkLoginUrl: string = '';
  private httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8'
    })
  };

  constructor(private http: HttpClient, private router: Router) {
    this.initApiUrl();
    this.initLoginStatus();
  }

  private initApiUrl() {
    this.loginUrl = environment.ApiUrlConfig.login;
    this.logoutUrl = environment.ApiUrlConfig.logout;
    this.regiserUrl = environment.ApiUrlConfig.register;
    this.checkLoginUrl = environment.ApiUrlConfig.session;
  }

  initLoginStatus() {
    this.http.get(this.checkLoginUrl).subscribe(
      response => {
        this.isLoggined = response["loginStatus"];
        this.loginUser = response["user"];
      }
      ,
      errors => {
        this.isLoggined = errors["loginStatus"];
        this.loginUser = '';
      }
    );
  }

  login(userId: string, userPwd: string): Observable<any> {
    let userInfo = {
      "username": userId,
      "password": userPwd
    }
    return this.http.post(this.loginUrl, userInfo, this.httpOption)
      .pipe(
        tap((response) => {
          this.isLoggined = response['loginStatus'];
          this.loginUser = userId;
        }, error => {
          this.isLoggined = error['loginStatus'];
          this.loginUser = '';
        })
      );
  }

  logout(): Observable<any> {
    return this.http.get(this.logoutUrl).pipe(
      tap(() => {
        this.isLoggined = false;
        this.loginUser = '';
      })
    );
  }

  register(userId, userPwd, userPwdAgain, userName): Observable<any> {
    let userInfo = {
      'userId': userId,
      'userPwd': userPwd,
      'userPwdAgain': userPwdAgain,
      'userName': userName
    };
    return this.http.post(this.regiserUrl, userInfo, this.httpOption);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.http.get(this.checkLoginUrl).subscribe(
      response => {
        this.isLoggined = response["loginStatus"];
        this.loginUser = response["user"];
      }, error => {
        this.isLoggined = error["loginStatus"];
        this.loginUser = '';
        this.router.navigate(["login/"], {
          queryParams: {
            code: route.params["id"]
          }
        });
      }
    )
    return this.isLoggined;
  }
}
