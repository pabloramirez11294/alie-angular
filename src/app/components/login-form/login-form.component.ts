import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LoginService } from '../../services/login.service';
import { UserI } from '../../models/user';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private authService: LoginService, private router: Router) { }

  ngOnInit() {
  }
  onLogin(form):void{
    console.log('logeado',form.value);
    this.authService.login(form.value).subscribe(res => {
      
      this.router.navigateByUrl('/inicio');
    },err=>{
      alert(err.error.message);
    });
  }
}
