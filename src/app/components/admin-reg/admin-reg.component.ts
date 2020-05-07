import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
@Component({
  selector: 'app-admin-reg',
  templateUrl: './admin-reg.component.html',
  styleUrls: ['./admin-reg.component.css']
})
export class AdminRegComponent implements OnInit {
  user:any = {};
  constructor(private reg: LoginService) { }

  ngOnInit() {
  }

  onRegistrar(form) {
    if(form.value.nombre==undefined || form.value.clave==undefined || form.value.correo==undefined){
      alert('Faltan campos.')
      return;
    }

    form.value.fecha_nac=this.convertirFecha(form.value.fecha_nac.toString());
    form.value
    console.log("registradondo", form.value);
    this.reg.adminReg(form.value).subscribe(
      (res) => {
        console.log("registrado", res);
        alert("Usuario Registrado");
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

  
}
