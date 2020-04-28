import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudProductosService } from "../../services/crud-productos.service";
@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  @HostBinding('class') classes ='row'; 
  datos:any=[];
  constructor(private router: Router, private activatedRoute: ActivatedRoute,private productoService:CrudProductosService) { }

  ngOnInit() {
    this.listarProductos();
  }

  eliminar(id:any){
    this.productoService.deleteProducto(id).subscribe(
      res=>{
        console.log(res,'-----');
      },
      err=>{
        err =>console.log(err)
      }
    );
    this.listarProductos();
  }

  listarProductos(){
    const id:string=localStorage.getItem('TOKEN');
    this.productoService.getProductos(id).subscribe(
      res =>{
        console.log(res);
        this.datos=res;
      },
      err =>console.log(err)
    );
  }
}
