import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LoginService } from '../../services/login.service';
@Component({
  selector: "app-registrar",
  templateUrl: "./registrar.component.html",
  styleUrls: ["./registrar.component.css"],
})
export class RegistrarComponent implements OnInit {
  user = {};
  constructor(private reg: LoginService, private router: Router) {}

  ngOnInit() {}
  onRegistrar(form) {
    console.log("ddddddd ", form.value.fecha_nac);
    let fecha: any = form.value.fecha_nac.toString();
    form.value.fecha_nac = this.convertirFecha(fecha);

    console.log("registradondo", form.value);
    this.reg.registrar(form.value).subscribe(
      (res) => {
        console.log("registrado", res);
        alert("Revise su correo para confirmar la cuenta.");
        this.router.navigateByUrl("/");
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
