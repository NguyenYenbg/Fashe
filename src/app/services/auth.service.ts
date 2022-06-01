import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jwtDecord from 'jwt-decode';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseURL = 'https://reqres.in';
  public user = null;
  private savedTokenName = 'token';

  constructor(private http: HttpClient) {
    let token = localStorage.getItem(this.savedTokenName);
    if (token) {
      let decorded = jwtDecord(token);
      this.user = decorded;
      this.user.token = token;
    }
  }

  login(user) {
    return this.http.post(`${this.baseURL}/api/login`, user).pipe(
      map(
        (res) =>
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkphbmV0IiwiaXNBZG1pbiI6dHJ1ZSwiZW1haWwiOiJqYW5ldC53ZWF2ZXJAcmVxcmVzLmluIiwiaWF0IjoxNTE2MjM5MDIyLCJhdmF0YXIiOiJodHRwczovL3JlcXJlcy5pbi9pbWcvZmFjZXMvMi1pbWFnZS5qcGciLCJpZCI6Mn0.vhP2k3WolY7LDkHTmvvq6dEJk3WaiM-SWv2RdHkHsf0'
      ),
      tap((token: string) => {
        let decorded = jwtDecord(token);
        this.user = decorded;
        this.user.token = token;
        console.log(decorded);

        localStorage.setItem(this.savedTokenName, token);
      })
    );
  }

  //ktra user ton tai k
  isLoginedIn(): boolean {
    //! convert ve bool, ! tra ve gia tri that
    return !!this.user;
  }

  //logout
  //xoa token, xoa obj user
  logout() {
    this.user = null;
    localStorage.removeItem(this.savedTokenName);
  }
}
