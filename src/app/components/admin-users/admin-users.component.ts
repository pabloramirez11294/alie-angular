import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login.service";
@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {
  datos:any;
  bitacora:any;
  info:any={};
  user={
    id_operador:localStorage.getItem('TOKEN'),
    id_usuario:0,
    clase:'',
    estado:1,
    descripcion:''
  };
  constructor(private loginService:LoginService) { }

  ngOnInit() {
    this.getUsuarios();
    this.getBitacora();
  }
  guardarClase(){
    if(this.info.clase==undefined || this.info.id_usuario==undefined){
      alert('Dejo campos vacios.');
      return;
    }
    let encontro:Boolean=false;
    this.user.clase=this.info.clase;
    this.user.descripcion=this.info.descripcion;
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
        this.getBitacora();
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
    let auxEstado:number=null;
    //para verificar que el usuairo no este de baja
    for(let dato of this.datos){
      if(dato[0]==this.info.id_usuario2){
        auxEstado=dato[14];
      }
    }
    if(auxEstado!=null && auxEstado==-1){
      alert('El usuario ya esta dado de baja.');
      return;
    }
    let encontro:Boolean=false;
    this.user.estado=this.info.estado;
    this.user.descripcion=this.info.descripcion2;
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
        this.getBitacora();
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

  getBitacora(){
    this.loginService.getBitacora().subscribe(
      res=>{
        console.log('bitacora',res);
        this.bitacora=res;
      },
      err=>{
        console.log(err);
        alert(err.message);
      }
    );
  }

}
