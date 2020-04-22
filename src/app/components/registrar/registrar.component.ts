import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LoginService } from '../../services/login.service';
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  user = {}
  constructor(private reg: LoginService, private router: Router) { }

  ngOnInit() {
  }
  onRegistrar(form){
    console.log('registradondo',form.value);
    this.reg.registrar(form.value).subscribe(res => {
      console.log('registrado',res);
      alert('Revise su correo para confirmar la cuenta.');
      this.router.navigateByUrl('/');
    },err=>{
      console.error();
      alert('Error al registrarse.');
    });
  }
  

}
