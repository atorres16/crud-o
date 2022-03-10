import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/models/item';
import { Data } from 'src/app/paged-list/models/data';
import { ModalService } from 'src/app/services/modal.service';


@Component({
  selector: 'app-select-from-catalog',
  templateUrl: './select-from-catalog.component.html',
  styleUrls: ['./select-from-catalog.component.css']
})
export class SelectFromCatalogComponent implements OnInit, AfterViewInit {

  Modal: any
  Response?: boolean;
  @Input() Data?: Data;
  @Output() onPageClicked = new EventEmitter();
  SearchWord?: string;
  @Output() OnSearch = new EventEmitter<string>();
  SelectedDataItem?: Item;
  @Output() OnOk = new EventEmitter<Item>();


  constructor(private modalservice: ModalService) {
    this.modalservice.SelectFromCatalog = this;
  }



  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // $(() => {
    //   this.Modal = $("#selectFromCatalogComponent");
    // });

  }

  // Show = (data: Data) => {
  //   this.Data = data;
  //   this.Modal.modal("show");
  //   return new Promise<boolean>((res, rej) => {
  //     this.Modal.on("hidden.bs.modal", (e: any) => {
  //       this.Modal.modal("hide");
  //       this.Response = true;
  //       res(this.Response);
  //     });
  //   });
  // }


  pageClicked = (evt: any) => {
    this.onPageClicked.emit(evt);
  }

  Search = () => {

    this.OnSearch.emit(this.SearchWord);

  }

  Ok = () => {
    if (this.SelectedDataItem) {
      this.OnOk.emit(this.SelectedDataItem);
    }
  }

}
