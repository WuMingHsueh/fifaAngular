import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoggined:boolean = false;
  loginUser:string = '';

  private loginUrl: string = 'phpAPI/login.php';
  private logoutUrl: string = 'phpAPI/logout.php';
  private regiserUrl: string = 'phpAPI/register.php';
  private httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  };

  constructor(private http:HttpClient) { }

  login(userId: string, userPwd: string): Observable<any> {
    let userInfo = new HttpParams().append('username', userId).append('password', userPwd);
    return this.http.post(this.loginUrl, userInfo, this.httpOption)
              .pipe(
                tap(() => {
                  this.isLoggined = true;
                  this.loginUser = userId;
                })
              );

  }

  logout(): Observable<any> {
    return this.http.get(this.logoutUrl).pipe(
      tap( () => {
        this.isLoggined = false;
        this.loginUser = '';
      })
    );
  }

  checkLogin() {

  }

  register(userId, userPwd, userPwdAgain, userName): Observable<any> {
    let userInfo = new HttpParams().append('userId', userId)
                                   .append('userPwd', userPwd)
                                   .append('userPwdAgain', userPwdAgain)
                                   .append('userName', userName);
    return this.http.post(this.regiserUrl, userInfo, this.httpOption);
  }
}
