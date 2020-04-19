import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
    this.loginService.getCliente();
  }

}
