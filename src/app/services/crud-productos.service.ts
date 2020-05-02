import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Producto } from "../models/producto";
import { retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CrudProductosService {
  API_URI = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getProductos(id:string) {
    return this.http.get(`${this.API_URI}/productos/listar/${id}`);
  }
  getProducto(codigo:string) {
    return this.http.get(`${this.API_URI}/productos/getProducto/${codigo}`);
  }
  setProducto(producto: Producto) {
    return this.http.post(`${this.API_URI}/productos/crear`, producto);
  }
  deleteProducto(codigo:number){
    return this.http.put(`${this.API_URI}/productos/eliminar`, {cod:codigo});
  }
  buscar(nombre:string){
    return this.http.get(`${this.API_URI}/productos/buscar/${nombre}`);
  }
  setProductoImagen(imagen:File) {
    const data = new FormData();
    data.append('nameImage', imagen);
    return this.http.post(`${this.API_URI}/productos/cargarImagen`, data);
  }
  setCargaMasiva(data:any){
    return this.http.post(`${this.API_URI}/productos/cargaMasiva`, data);
  }
  agregarCarrito(data: any) {
    return this.http.post(`${this.API_URI}/productos/agregarCarrito`, data);
  }
  getCarrito(id:string) {
    return this.http.get(`${this.API_URI}/productos/getCarrito/${id}`);
  }
  comprar(data:any){
    return this.http.put(`${this.API_URI}/productos/comprar`, data);
  }
}
