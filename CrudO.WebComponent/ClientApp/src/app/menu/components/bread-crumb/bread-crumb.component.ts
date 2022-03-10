import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BreadCrumbItem } from '../../models/bread-crumb-item';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.css']
})
export class BreadCrumbComponent implements OnInit {

  @Input() breadCrumbItems?: BreadCrumbItem[];
  @Output() breadCrumbItemClicked = new EventEmitter();
  constructor() {
    this.breadCrumbItems = [];
  }

  ngOnInit(): void {

  }
  itemClicked = (item: BreadCrumbItem) => {
    var found = false;
    var arr = this.breadCrumbItems;
    for (var i of this.breadCrumbItems!) {
      if (found) {
        arr?.splice(arr!.indexOf(i), 1);
      }
      if (i === item) {
        found = true;
      }
    }
    this.breadCrumbItems = arr;
    this.breadCrumbItemClicked.emit(item);
  }

}
