import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent}  from './components/inicio/inicio.component';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {RegistrarComponent} from './components/registrar/registrar.component';
import {CrudProductoComponent} from './components/crud-producto/crud-producto.component';
import {CatalogoComponent} from "./components/catalogo/catalogo.component";
import {ProductoIndividualComponent} from "./components/producto-individual/producto-individual.component";
import {CarritoComponent} from "./components/carrito/carrito.component";
import {GuardiaGuard} from './guardia.guard';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
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
    path: 'registrar', 
    component: RegistrarComponent 
  },
  { 
    path: 'crudProductos', 
    component: CrudProductoComponent, 
    canActivate:[GuardiaGuard]
  },
  { 
    path: 'catalogo', 
    component: CatalogoComponent, 
    canActivate:[GuardiaGuard]
  },
  { 
    path: 'productoIndividual/:codigo', 
    component: ProductoIndividualComponent
  },
  { 
    path: 'carrito', 
    component: CarritoComponent, 
    canActivate:[GuardiaGuard]
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
