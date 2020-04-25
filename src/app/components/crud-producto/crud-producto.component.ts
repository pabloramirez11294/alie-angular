import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-crud-producto',
  templateUrl: './crud-producto.component.html',
  styleUrls: ['./crud-producto.component.css']
})
export class CrudProductoComponent implements OnInit {

  producto:Producto={
    nombre: '',
    imagen: '',
    descripcion:'',
    precio:null,
    fecha_publicacion:new Date().toDateString(),
    cantidad:null,
    color:'',
    estado:1
  }
  categoria={};
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  guardarProducto(){
    this.producto.fecha_publicacion=this.convertirFecha(this.producto.fecha_publicacion);
    console.log(this.producto);
  }

  guardarCategoria(){
    console.log(this.categoria);
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
