import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudProductosService } from "../../services/crud-productos.service";
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-producto-individual',
  templateUrl: './producto-individual.component.html',
  styleUrls: ['./producto-individual.component.css']
})
export class ProductoIndividualComponent implements OnInit {

  constructor(private activateRoute:ActivatedRoute,
    private crudProductosService:CrudProductosService,
    private loginService:LoginService) { }
  prod:any=[];
  cantidad:number;
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
  agregarCarrito(){
    if(this.cantidad==undefined){
      alert('Ingrese la cantidad.');
      return;
    }
    const id=localStorage.getItem('TOKEN');
    const cod = this.prod[0][0];
    const data={
      id_u:id,
      codigo:cod,
      cantidad:this.cantidad
    }
    console.log(data);
    this.crudProductosService.agregarCarrito(data).subscribe(
      res=>{          
        console.log(res);
        alert('Producto agregado.');
      },
      err=>{
        console.log(err);
        alert(err.message);
      }
    );
  }
}
