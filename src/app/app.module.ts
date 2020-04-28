import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//components
import { NavigationComponent } from './components/navigation/navigation.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
//servicios
import {LoginService} from './services/login.service';
import { CrudProductosService } from "./services/crud-productos.service";

import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
//para un input fecha
import {MatDatepickerModule,MatNativeDateModule} from '@angular/material';
//import {MatMomentDateModule} from '@angular/material-moment-adapter';
//para autenticar que un usuario puede ver ciertas paginas
import {GuardiaGuard} from './guardia.guard';
import { CrudProductoComponent } from './components/crud-producto/crud-producto.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ProductoIndividualComponent } from './components/producto-individual/producto-individual.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginFormComponent,
    InicioComponent,
    RegistrarComponent,
    CrudProductoComponent,
    CatalogoComponent,
    ProductoIndividualComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule, 
    MatNativeDateModule
  ],
  providers: [
    LoginService,
    CrudProductosService,
    GuardiaGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
