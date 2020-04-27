import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Producto } from "../models/producto";
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CrudProductosService {
  API_URI = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getProductos() {
    return this.http.get(`${this.API_URI}/productos/listar`);
  }
  setProducto(producto: Producto) {
    return this.http.post(`${this.API_URI}/productos/crear`, producto);
  }
  deleteProducto(codigo:number){
    return this.http.put(`${this.API_URI}/productos/eliminar`, {cod:codigo});
  }


}
