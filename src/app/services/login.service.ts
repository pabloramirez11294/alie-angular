import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cliente} from '../models/Cliente'


import { UserI } from '../models/user';
import { JwtResponseI } from '../models/jwt-response';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  API_URI = 'http://localhost:3000';
  private token: string;
  authSubject = new BehaviorSubject(false);

  constructor(private http:HttpClient) { }
  
  getCliente(){
    return this.http.get(`${this.API_URI}/login`);
  }
  setCliente(cliente:Cliente){
    return this.http.post(`${this.API_URI}/login`,cliente);
  }
  login(user: UserI): Observable<JwtResponseI> {
      return this.http.post<JwtResponseI>(`${this.API_URI}/register/login`,
    user).pipe(tap(
        (res: JwtResponseI) => {
          if (res) {
            // guardar token
            console.log(res);
            this.saveToken(res.dataU.accessToken, res.dataU.expiresIn);
          }
        })
      );
  }
  registrar(user: UserI): Observable<JwtResponseI> {
    return this.http.post<JwtResponseI>(`${this.API_URI}/register/crear`,
  user).pipe(tap(
      (res: JwtResponseI) => {
        if (res) {
          // guardar token
          console.log("hasta aqui ",res);
          this.saveToken(res.dataU.accessToken, res.dataU.expiresIn);
        }
      })
    );
}

  private saveToken(token: string, expiresIn: string): void {
    localStorage.setItem("ACCESS_TOKEN", token);
    localStorage.setItem("EXPIRES_IN", expiresIn);
    this.token = token;
  }

}
