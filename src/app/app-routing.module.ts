import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent}  from './components/inicio/inicio.component';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {RegistrarComponent} from './components/registrar/registrar.component';
import {CrudProductoComponent} from './components/crud-producto/crud-producto.component';
import {CatalogoComponent} from "./components/catalogo/catalogo.component";
import {ProductoIndividualComponent} from "./components/producto-individual/producto-individual.component";
import {CarritoComponent} from "./components/carrito/carrito.component";
import {DenegadoComponent} from "./components/denegado/denegado.component";
import { AdminUsersComponent } from "./components/admin-users/admin-users.component";
import { UserAyudaComponent } from "./components/user-ayuda/user-ayuda.component";
import { AdminRegComponent } from "./components/admin-reg/admin-reg.component";
import { PerfilComponent } from "./components/perfil/perfil.component";
import { RecuperarPassComponent } from "./components/recuperar-pass/recuperar-pass.component";
import { UsuarioGuard } from "./guards/usuario.guard";
import { AdministradorGuard} from "./guards/administrador.guard";
const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  { 
    path: 'denegado', 
    component: DenegadoComponent
  },
  {
    path:'inicio',
    component:InicioComponent
    //canActivate:[GuardiaGuard]
  },
  { 
    path: 'login', 
    component: LoginFormComponent 
  },
  { 
    path: 'recuperarPass', 
    component: RecuperarPassComponent 
  },
  { 
    path: 'registrar', 
    component: RegistrarComponent 
  },
  { 
    path: 'crudProductos', 
    component: CrudProductoComponent, 
    canActivate:[UsuarioGuard]
  },
  { 
    path: 'catalogo', 
    component: CatalogoComponent, 
    canActivate:[UsuarioGuard]
  },
  { 
    path: 'productoIndividual/:codigo', 
    component: ProductoIndividualComponent
  },
  { 
    path: 'carrito', 
    component: CarritoComponent, 
    canActivate:[UsuarioGuard]
  },
  { 
    path: 'userAyuda', 
    component: UserAyudaComponent, 
    canActivate:[UsuarioGuard]
  },
  { 
    path: 'perfil', 
    component: PerfilComponent, 
    canActivate:[UsuarioGuard]
  },
  { 
    path: 'adminUsers', 
    component: AdminUsersComponent,
    canActivate:[AdministradorGuard]
  },
  { 
    path: 'adminReg', 
    component: AdminRegComponent,
    canActivate:[AdministradorGuard]
  }  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
