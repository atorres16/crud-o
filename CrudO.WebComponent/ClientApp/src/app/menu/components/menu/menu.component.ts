import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Item } from 'src/app/models/item';
import { HttpClientService } from 'src/app/services/http-client.service';
import { BreadCrumbItem } from '../../models/bread-crumb-item';
import { Menu } from '../../models/menu';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Input() menu?:Menu;
  @Output() itemClicked = new EventEmitter<any>();

  selectedMenuItem?: Item;

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit(): void {

  }

  menuItemClicked = (item: any) => {
    this.selectedMenuItem = item;
    this.itemClicked.emit(item);
  }

  breadCrumbItemClick = (bcu: BreadCrumbItem) => {

  }

}
