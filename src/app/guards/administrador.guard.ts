import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { LoginService } from '../services/login.service';
@Injectable({
  providedIn: 'root'
})
export class AdministradorGuard implements CanActivate {
  constructor(private loginService:LoginService, private router:Router){

  }


  canActivate():boolean{
    const clase:string=this.loginService.claseUser();
     if(clase !=undefined && clase==='admin'){
      return true;
    }
    this.router.navigate(['/denegado']);
    return false;
  }  
}
