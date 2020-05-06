import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { LoginService } from '../../services/login.service';
@Component({
  selector: 'app-recuperar-pass',
  templateUrl: './recuperar-pass.component.html',
  styleUrls: ['./recuperar-pass.component.css']
})
export class RecuperarPassComponent implements OnInit {

  constructor(private authService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  onLogin(form):void{
    
    this.authService.recuperarPass(form.value).subscribe(res => {
      
      console.log(res);
     
    },err=>{
      console.log(err);
    });
  }
}
