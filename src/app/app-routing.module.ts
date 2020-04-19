import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent}  from './components/inicio/inicio.component';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {RegistrarComponent} from './components/registrar/registrar.component';

const routes: Routes = [

  {
    path:'inicio',
    component:InicioComponent
  },
  { 
    path: 'login', 
    component: LoginFormComponent 
  },
  { 
    path: 'registrar', 
    component: RegistrarComponent 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
