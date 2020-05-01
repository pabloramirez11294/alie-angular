import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { Router, ActivatedRoute } from '@angular/router';
import { CrudProductosService } from "../../services/crud-productos.service";


interface IEvento extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-crud-producto',
  templateUrl: './crud-producto.component.html',
  styleUrls: ['./crud-producto.component.css']
})
export class CrudProductoComponent implements OnInit {
  carga:boolean=false;
  texto:string='';
  fileI: File;
  reader:FileReader;
  producto:Producto={
    nombre: '',
    imagen: '',
    descripcion:'',
    precio:null,
    fecha_publicacion:'',
    cantidad:null,
    color:'',
    estado:1,
    categoria:'',
    id_usuario:''
  }
  categoria={};
  constructor(private router: Router, private activatedRoute: ActivatedRoute,private productoService:CrudProductosService) { }

  ngOnInit() {    
  }

  guardarProducto(ruta:string){
    this.producto.imagen=ruta;
    if(this.producto.nombre=='' || this.producto.imagen=='' || this.producto.precio==null 
        || this.producto.cantidad==0 || this.producto.color==''){
      alert('Faltan campos.')
      return;
    }
    this.producto.fecha_publicacion=new Date().toDateString();
    this.producto.fecha_publicacion=this.convertirFecha(this.producto.fecha_publicacion);
    this.producto.id_usuario=localStorage.getItem('TOKEN');
    console.log(this.producto);
    this.productoService.setProducto(this.producto).subscribe(
      res => {
        let a:any=res;
        alert(a.message);
        console.log(res);
      },
      err => {
        alert(err.message);
        console.error(err);
      }
    );
  }
  async cargarProducto(){
    if(this.fileI==undefined){
      alert('Le falta agregar imagen.');
      return;
    }

      let ruta:string;
      this.productoService.setProductoImagen(this.fileI).subscribe(
      res => {        
        console.log(res);
        const {imagePath}:any= res;
        ruta=imagePath;
        console.log(ruta);
        this.guardarProducto(ruta);
      },
      err =>{ 
        ruta='error';
        console.log(err);        
      });
  }

  eventoI(event:IEvento){
    if (event.target.files && event.target.files[0]) {
      this.fileI = <File>event.target.files[0];
      console.log(this.fileI);
    }
  }


  clear(){
    this.producto.nombre='';
    this.producto.imagen='';
    this.producto.descripcion='';
    this.producto.precio=null;
    this.producto.cantidad=null;
    this.producto.color='';
    this.producto.categoria='';
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

  btnProdIndiv(){
    this.carga=false;
  }
  btnCarga(){
    this.carga=true;
  }
  cargaMasiva(){
    console.log(this.reader.result);
    const texto:string= this.reader.result.toString();
    const id:string=localStorage.getItem('TOKEN');
    texto.trim();
    const data={
      texto:texto,
      id_usuario:id
    }
    console.log(data);
    this.productoService.setCargaMasiva(data).subscribe(
      res => {
        let a:any=res;
        alert(a.message);
        console.log(res);
      },
      err => {
        alert(err.message);
        console.error(err);
      }
    );
  }
  
  eventoCM(event:IEvento){
    
    if (event.target.files && event.target.files[0]) {     
     this.fileI = <File>event.target.files[0];
    this.reader = new FileReader();

    this.reader.readAsText(this.fileI);

    this.reader.onload = function() {
      //console.log(this.reader.result);
      //localStorage.setItem('texto',this.reader.result.toString());
    };
      
    }
  } 

}