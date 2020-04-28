import { Component, OnInit, HostBinding } from '@angular/core';
import {CrudProductosService} from '../../services/crud-productos.service'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  @HostBinding('class') classes ='row'; 
  datos:any=[];
  producto:any={};
  constructor(private productosService:CrudProductosService) { }

  ngOnInit() {
    this.getProductos('a')
  }
  buscar(nombre:string){
    if(nombre==undefined)
      return;
    console.log(nombre);
    this.getProductos(nombre);
  }
  private getProductos(nombre:string){
    this.productosService.buscar(nombre).subscribe(
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
