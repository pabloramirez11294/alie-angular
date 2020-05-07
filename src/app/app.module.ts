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
import {UsuarioGuard} from './guards/usuario.guard';
import {AdministradorGuard  } from "./guards/administrador.guard";

import { CrudProductoComponent } from './components/crud-producto/crud-producto.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { ProductoIndividualComponent } from './components/producto-individual/producto-individual.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { DenegadoComponent } from './components/denegado/denegado.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { UserAyudaComponent } from './components/user-ayuda/user-ayuda.component';
import { AdminRegComponent } from './components/admin-reg/admin-reg.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RecuperarPassComponent } from './components/recuperar-pass/recuperar-pass.component';
import { ReportesComponent } from './components/reportes/reportes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginFormComponent,
    InicioComponent,
    RegistrarComponent,
    CrudProductoComponent,
    CatalogoComponent,
    ProductoIndividualComponent,
    CarritoComponent,
    DenegadoComponent,
    AdminUsersComponent,
    UserAyudaComponent,
    AdminRegComponent,
    PerfilComponent,
    RecuperarPassComponent,
    ReportesComponent    
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
    UsuarioGuard,
    AdministradorGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
