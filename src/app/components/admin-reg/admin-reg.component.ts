import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
@Component({
  selector: 'app-admin-reg',
  templateUrl: './admin-reg.component.html',
  styleUrls: ['./admin-reg.component.css']
})
export class AdminRegComponent implements OnInit {
  user = {};
  constructor(private reg: LoginService) { }

  ngOnInit() {
  }

  onRegistrar(form) {
    if(form.value.nombre==undefined || form.value.clave==undefined || form.value.correo==undefined){
      alert('Faltan campos.')
      return;
    }


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

  
}
