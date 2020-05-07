import { Component, OnInit } from '@angular/core';
import {CrudProductosService} from "../../services/crud-productos.service";
@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  data3:any;
  data4:any;
  data6:any;
  data7:any;
  data8:any;
  data10:any;
  year:number;
  cantidad:number;
  constructor(private service:CrudProductosService) { }

  ngOnInit() {
  }
  reporte3(){
    if(this.year==undefined){
      alert('coloque el año');
      return;
    }
    this.service.reporte3(this.year).subscribe(
      res=>{
        console.log(res);
        this.data3=res;
      },
      err=>{
        console.log(err);
        alert(err.message);
      }
    );
  }

  reporte4(){
    this.service.reporte4().subscribe(
      res=>{
        console.log(res);
        this.data4=res;
      },
      err=>{
        console.log(err);
        alert(err.message);
      }
    );
  }
  reporte6(){
    this.service.reporte6().subscribe(
      res=>{
        
        console.log(res);
        this.data6=res;
        if (this.data6.length > 3) {
          this.data6.splice(3, 1)
        }
        console.log(this.data6);
      },
      err=>{
        console.log(err);
        alert(err.message);
      }
    );
  }
  reporte7(){
    this.service.reporte7().subscribe(
      res=>{
        console.log(res);
        this.data7=res;
        if (this.data7.length > 3) {
          this.data7.splice(3, 1)
        }
        console.log(this.data7);
      },
      err=>{
        console.log(err);
        alert(err.message);
      }
    );
  }
  reporte8(){
    this.service.reporte8().subscribe(
      res=>{
        console.log(res);
        this.data8=res;
      },
      err=>{
        console.log(err);
        alert(err.message);
      }
    );
  }

  reporte10(){
    if(this.cantidad==undefined){
      alert('coloque la cantidad');
      return;
    }
    this.service.reporte10(this.cantidad).subscribe(
      res=>{
        console.log(res);
        this.data10=res;
      },
      err=>{
        console.log(err);
        alert(err.message);
      }
    );
  }
}
