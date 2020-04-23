import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ListComponent } from './components/list/list.component';
import { InicioComponent } from './components/inicio/inicio.component';

import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {LoginService} from './services/login.service';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import {MatDatepickerModule,MatNativeDateModule} from '@angular/material';
//import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {GuardiaGuard} from './guardia.guard';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginFormComponent,
    ListComponent,
    InicioComponent,
    RegistrarComponent
    
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
    GuardiaGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
