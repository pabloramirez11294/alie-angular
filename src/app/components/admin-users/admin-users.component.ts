import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login.service";
@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
  datos:any;
  info:any={};
  user={
    id_usuario:0,
    clase:'',
    estado:1
  };
  constructor(private loginService:LoginService) { }

  ngOnInit() {
    this.getUsuarios();
  }
  guardarClase(){
    if(this.info.clase==undefined || this.info.id_usuario==undefined){
      alert('Dejo campos vacios.');
      return;
    }
    let encontro:Boolean=false;
    this.user.clase=this.info.clase;
    for(let dato of this.datos){
      if(dato[0]==this.info.id_usuario){
        this.user.id_usuario=dato[0];
        this.user.estado=dato[14];
        encontro=true;
      }
    }
    if(!encontro){
      alert('No encontro el usuario.');
      return;
    }
    console.log('user: ',this.user);
    this.loginService.adminActualizar(this.user).subscribe(
      res=>{
        const mensaje:any=res;
        console.log(mensaje.message);
        this.getUsuarios();
        alert(mensaje.message)
      },
      err=>{
        console.log(err);
        alert(err.message);
      }
    );
  }

  guardarEstado(){
    if(this.info.estado==undefined || this.info.id_usuario2==undefined){
      alert('Dejo campos vacios.');
      return;
    }
    let encontro:Boolean=false;
    this.user.estado=this.info.estado;
    for(let dato of this.datos){
      if(dato[0]==this.info.id_usuario2){
        this.user.id_usuario=dato[0];
        this.user.clase=dato[11];
        encontro=true;
      }
    }
    if(!encontro){
      alert('No encontro el usuario.');
      return;
    }
    console.log('user: ',this.user);
    this.loginService.adminActualizar(this.user).subscribe(
      res=>{
        const mensaje:any=res;
        console.log(mensaje.message);
        this.getUsuarios();
        alert(mensaje.message)
      },
      err=>{
        console.log(err);
        alert(err.message);
      }
    );
  }

  getUsuarios(){
    this.loginService.listar().subscribe(
      res=>{
        console.log(res);
        this.datos=res;
      },
      err=>{
        console.log(err);
        alert(err.message);
      }
    );
  }

}
