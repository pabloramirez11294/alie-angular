import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree ,Router} from '@angular/router';
import { LoginService } from './services/login.service';

@Injectable({
  providedIn: 'root'
})
export class GuardiaGuard implements CanActivate {
  constructor(private loginService:LoginService, private router:Router){

  }

  canActivate():boolean{

    if(this.loginService.estaLog()){
      return true;
    }
    this.router.navigate(['/login']);
  }
  
}
