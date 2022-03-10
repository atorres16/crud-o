import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagedListComponent } from './components/paged-list/paged-list.component';
import { RouterModule } from '@angular/router';
import { PaginationComponent } from './components/pagination/pagination.component';



@NgModule({
  declarations: [
    PagedListComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    PagedListComponent,
    PaginationComponent
  ]
})
export class PagedListModule { }
