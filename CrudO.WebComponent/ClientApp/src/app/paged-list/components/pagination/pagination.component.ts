
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  // @Input() totalPages!: number;

  private _totalPages!: number;

  get totalPages(): number {
    return this._totalPages;
  }

  //https://stackoverflow.com/q/46081339/3596441
  @Input()
  set totalPages(value: number) {

    this._totalPages = value;
    this.pages?.splice(0, this.pages.length);
    //set pages
    for (var i = 0; i < this.totalPages; i++) {
      this.pages?.push(i + 1);
    }
    this.currentPage = 1;
  }

  currentPage!: number;

  @Output() pageClicked = new EventEmitter();

  pages?: number[];

  constructor() {
    this.pages = [];
  }

  ngOnInit(): void {
  }

  clickNext = () => {
    if (this.currentPage == this.totalPages) {
      return;
    }
    this.currentPage++;
    this.pageClicked.emit(this.currentPage);
  }

  clickPrevious = () => {
    if (this.currentPage === 1) {
      return;
    }

    this.currentPage--;
    this.pageClicked.emit(this.currentPage);

  }


  clickPage = (page: number) => {
    this.currentPage = page;
    this.pageClicked.emit(this.currentPage);
  }
}
