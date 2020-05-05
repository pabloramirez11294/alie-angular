import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  user:any = {};
  constructor(private reg: LoginService) { 
    
  }

  ngOnInit() {
    this.getUsuario();
  }
  onRegistrar(form) {
    
    form.value.id_usuario= this.user.id_usuario;
    console.log("registradondo", form.value);
    this.reg.actualizarUsuario(form.value).subscribe(
      (res) => {
        console.log("actualizado", res);
        alert("Se actualizo sus datos.");
        this.getUsuario();
      },
      (err) => {
        console.error();
        alert("Error al registrarse.");
      }
    );
  }

  convertirFecha(fecha: any):string {
    let separador = fecha.split(" ");
    let year = separador[3];
    let mes = separador[1];
    let dia = separador[2];
    let numMes:number;
    switch (mes) {
      case "Jan":
        numMes=1;
        break;
      case "Feb":
        numMes=2;
        break;
      case "Mar":
        numMes=3;
        break;
      case "Apr":
        numMes=4;
        break;
      case "May":
        numMes=5;
        break;
      case "Jun":
        numMes=6;
        break;
      case "Jul":
        numMes=7;
        break;
      case "Aug":
        numMes=8;
        break;
      case "Sep":
        numMes=9;
        break;
      case "Oct":
        numMes=10;
        break;
      case "Nov":
        numMes=11;
        break;
      case "Dec":
        numMes=12;
        break;
      default:
        numMes=1;
      
    }
    let fechaArreglada = dia + "-" + numMes + "-" + year;
    return fechaArreglada;
  }

  getUsuario(){
    this.reg.getUsuario().subscribe(
      (res) => {
        console.log("datos", res);
        this.user.id_usuario=localStorage.getItem('TOKEN');
        this.user.nombre=res[0][1];
        this.user.apellidos=res[0][2];
        this.user.correo=res[0][4];
        this.user.clave=res[0][3];
        this.user.telefono=res[0][5];
        
        console.log("datos", this.user);
      },
      (err) => {
        console.log(err);
        alert("Error al obtener usuario.");
      }
    );
  }

}
