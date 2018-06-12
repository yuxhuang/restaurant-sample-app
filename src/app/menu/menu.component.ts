import { Component, OnInit } from '@angular/core';
import {Menu} from '../menu';
import {MenuService} from '../menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menu: Menu = [];

  constructor(private svc: MenuService) { }

  ngOnInit() {
    this.svc.getFullMenu().subscribe(menu => this.menu = menu);
  }

}
