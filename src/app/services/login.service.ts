import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cliente} from '../models/Cliente'


import { UserI } from '../models/user';
import { JwtResponseI } from '../models/jwt-response';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import {Router} from '@angular/router';
@Injectable({
  providedIn: "root",
})
export class LoginService {
  API_URI = "http://localhost:3000";
  private token: string;
  authSubject = new BehaviorSubject(false);

  constructor(private http: HttpClient,private router:Router) {}


  login(user: UserI): Observable<JwtResponseI> {
    return this.http
      .post<JwtResponseI>(`${this.API_URI}/register/login`, user)
      .pipe(
        tap((res: JwtResponseI) => {
          if (res) {
            // guardar token
            console.log(res);
            this.guardarTok(res.dataU.accessToken, res.dataU.expiresIn);
          }
        })
      );
  }
  registrar(user: UserI): Observable<JwtResponseI> {
    return this.http
      .post<JwtResponseI>(`${this.API_URI}/register/crear`, user)
      .pipe(
        tap((res: JwtResponseI) => {
          if (res) {
            // guardar token
            //console.log("hasta aqui ",res);
            //this.guardarTok(res.dataU.accessToken, res.dataU.expiresIn);
          }
        })
      );
  }
  estaLog():Boolean{
    return !!localStorage.getItem('TOKEN');
  }

  private guardarTok(token: string, expiresIn: string): void {
    localStorage.setItem("EXPIRES_IN", expiresIn);
    localStorage.setItem("TOKEN", token);

    this.token = token;
  }

  logOut(){
    localStorage.removeItem('TOKEN');
    this.router.navigate(['/login']);
  }


}
