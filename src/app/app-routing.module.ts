import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent}  from './components/inicio/inicio.component';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {RegistrarComponent} from './components/registrar/registrar.component';
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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
