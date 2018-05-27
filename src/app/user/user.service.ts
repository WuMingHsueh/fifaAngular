import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, throwError, observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggined: boolean = false;
  loginUser: string = '';
  apiUrl: any;
  private loginUrl: string = 'phpRestAPI/login.php';
  private logoutUrl: string = 'phpRestAPI/logout.php';
  private regiserUrl: string = 'phpRestAPI/register.php';
  private checkLoginUrl: string = 'phpRestAPI/session.php';
  private httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=UTF-8'
    })
  };

  constructor(private http: HttpClient, private router: Router) {
    this.apiUrl = environment.baseApiUrl;
  }

  initLoginStatus() {
    this.http.get(this.checkLoginUrl).subscribe(
      response => {
        this.loginUrl = (this.isLoggined = response["loginStatus"]) ? response["user"] : '';
      }
    );
  }

  login(userId: string, userPwd: string): Observable<any> {
    let userInfo = {
      "username": userId,
      "password": userPwd
    }
    return this.http.post(`${this.apiUrl}/login.php`, userInfo, this.httpOption)
      .pipe(
        tap((response) => {
          this.isLoggined = response['loginStatus'];
          this.loginUser = (this.isLoggined) ? userId : '';
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
        if (!this.isLoggined) {
          this.loginUser = '';
          this.router.navigateByUrl("login");
        } else {
          this.loginUrl = response["user"];
        }
      }
    )
    return this.isLoggined;
  }

  checkLogin(): Observable<any> {
    return this.http.get(this.checkLoginUrl).pipe(
      tap(
        response => {
          this.loginUrl = (this.isLoggined = response["loginStatus"]) ? response['user'] : '';
        }
      )
    )
  }
}
