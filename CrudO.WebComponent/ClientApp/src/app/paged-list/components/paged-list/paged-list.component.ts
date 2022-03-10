import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/models/item';


import { Data } from '../../models/data';



@Component({
  selector: 'app-paged-list',
  templateUrl: './paged-list.component.html',
  styleUrls: ['./paged-list.component.css']
})
export class PagedListComponent implements OnInit {


  @Input() data?:Data;
  @Output() AddNewDataItem = new EventEmitter();
  @Output() OpenDataItem = new EventEmitter();
  @Output() EditDataItem = new EventEmitter();
  @Output() DeleteDataItem = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  Add = () => {
    this.AddNewDataItem.emit();
  }

  //When they open a dataitem we re-populate the menu
  openDataItem = (dataItem: Item) => {
    this.OpenDataItem.emit(dataItem);
  }

  //When they edit an item, we show the edit form
  editDataItem = (dataItem: Item) => {
    this.EditDataItem.emit(dataItem);
  }

  deleteDataItem = (dataItem: Item) => {
    this.DeleteDataItem.emit(dataItem);
  }


}
