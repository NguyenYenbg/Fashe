import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jwtDecord from 'jwt-decode';
import { tap, map } from 'rxjs/operators';
import { config } from '../config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user = null;

  constructor(private http: HttpClient) {}

  isAuthenticated(): boolean {
    if (this.user === null) {
      let localUser = localStorage.getItem('user');
      if (localUser) {
        this.user = JSON.parse(localUser);
      }
    }
    return !!this.user;
  }

  logUserIn(user): void {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  logout() {
    localStorage.removeItem('user');
    window.location.reload();
  }

  login(user) {
    return new Promise<void>((resolve, reject) => {
      this.http
        .post('https://conduit.productionready.io/api/users/login', {
          user: user,
        })
        .subscribe(
          (res: any) => {
            this.logUserIn(res.user);
            resolve();
          },
          (err: any) => {
            reject(err);
          }
        );
    });
  }

  signup(user) {
    return new Promise<void>((resolve, reject) => {
      this.http
        .post('https://conduit.productionready.io/api/users', { user: user })
        .subscribe(
          (res: any) => {
            this.logUserIn(res.user);
            resolve();
          },
          (err: any) => {
            reject(err);
          }
        );
    });
  }
}
