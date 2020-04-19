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
  constructor(private authService: LoginService, private router: Router) { }

  ngOnInit() {
  }
  onRegistrar(form){
    console.log('registradondo',form.value);
    this.authService.registrar(form.value).subscribe(res => {
      console.log('registrado',res);
      this.router.navigateByUrl('/login');
    },err=>{
      console.error();
      alert('Error al registrarse.');
    });
  }
  

}
