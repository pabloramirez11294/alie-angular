import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private loginServices:LoginService) { }

  ngOnInit() {
  }

}
