import { Component, OnInit } from '@angular/core';
import {CrudProductosService} from '../../services/crud-productos.service'
import { promise } from 'protractor';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  datos:any=[];
  codigos:any=[];
  total:number=0;
  constructor(private productosService:CrudProductosService) { }

  ngOnInit() {
    this.getCarrito();
    
  }

  comprar(){
    const id_comprador=localStorage.getItem('TOKEN');
    const data={
      id_comprador:id_comprador,
      codigos:this.codigos,
      total:this.total
    }
    this.productosService.comprar(data).subscribe(
      res=>{
        const {message}:any=res;
        alert(message);
        console.log(res);
      },
      err=>{
        console.log(err);
        alert(err.message);
      }
    );
    console.log(data);
  }

  private getCarrito(){
    const id=localStorage.getItem('TOKEN');
    this.productosService.getCarrito(id).subscribe(
      res=>{
        console.log(res);
        this.datos=res;
        let i=0;
        for(let prod of this.datos){
          this.total += prod[5];
          this.codigos[i]=prod[0];
          i++;
        }
      },
      err=>{
        console.log(err);
        alert(err.message);
      }
    );
  }

}
