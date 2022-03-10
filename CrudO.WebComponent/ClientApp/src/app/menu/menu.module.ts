import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';


@NgModule({
  declarations: [
    MenuComponent,
    BreadCrumbComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule
  ],
  exports: [
    MenuComponent,
    BreadCrumbComponent
  ]
})
export class MenuModule { }
