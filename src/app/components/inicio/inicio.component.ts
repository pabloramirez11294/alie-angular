import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service'
import { Cliente } from 'src/app/models/Cliente';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  clientes:any=[];
  constructor(private loginService:LoginService) { }

  ngOnInit() {
    this.loginService.getCliente().subscribe(
      res=>{
        
        this.clientes=res;
        console.log(res);
      },
      err=>console.error(err)
    );
  }


}
