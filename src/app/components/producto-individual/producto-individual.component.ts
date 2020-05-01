import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudProductosService } from "../../services/crud-productos.service";
import { CrudProductoComponent } from '../crud-producto/crud-producto.component';

@Component({
  selector: 'app-producto-individual',
  templateUrl: './producto-individual.component.html',
  styleUrls: ['./producto-individual.component.css']
})
export class ProductoIndividualComponent implements OnInit {

  constructor(private activateRoute:ActivatedRoute,private crudProductosService:CrudProductosService) { }
  prod:any=[];
  ngOnInit() {
    this.activateRoute.paramMap.subscribe(params  =>{
      const codigo = params.get('codigo');
      this.crudProductosService.getProducto(codigo).subscribe(
        res=>{          
          this.prod=res;
         // console.log(this.prod[0][3]);
        },
        err=>{
          console.log(err);
          alert(err.message);
        }
      );
      console.log('codigo',codigo);
    });
  }

}
