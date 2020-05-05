import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cliente} from '../models/Cliente'


import { UserI } from '../models/user';
import { JwtI } from '../models/jwtInterface';
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


  login(user: UserI): Observable<JwtI> {
    return this.http
      .post<JwtI>(`${this.API_URI}/register/login`, user)
      .pipe(
        tap((res: JwtI) => {
          if (res) {
            // guardar token
            console.log(res);
            this.guardarTok(res.dataU.accessToken, res.dataU.clase);
          }
        })
      );
  }
  registrar(user: UserI): Observable<JwtI> {
    return this.http
      .post<JwtI>(`${this.API_URI}/register/crear`, user)
      .pipe(
        tap((res: JwtI) => {
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
  claseUser():string{
    if(localStorage.getItem('CLASE')==undefined){
      return null;
    }
    return localStorage.getItem('CLASE');
  }

  private guardarTok(token: string,clase:string): void {
    //localStorage.setItem("EXPIRES_IN", expiresIn);
    localStorage.setItem("TOKEN", token);
    localStorage.setItem('CLASE',clase);

    this.token = token;
  }

  logOut(){
    localStorage.removeItem('TOKEN');
    localStorage.removeItem('CLASE');
    this.router.navigate(['/login']);
  }

  listar(){
    return this.http.get(`${this.API_URI}/register/listar`);
  }
  
  adminActualizar(data:any){
    return this.http.put(`${this.API_URI}/register/adminActualizar`,data);
  }
  adminReg(data:any){
    return this.http.post(`${this.API_URI}/register/adminRegistro`,data);
  }

  getBitacora(){
    return this.http.get(`${this.API_URI}/register/getBitacora/${localStorage.getItem('TOKEN')}`);
  }
  getUsuario(){
    return this.http.get(`${this.API_URI}/register/getUsuario/${localStorage.getItem('TOKEN')}`);
  }
  actualizarUsuario(data:any){
    return this.http.put(`${this.API_URI}/register/actualizarUsuario`,data);
  }
}
