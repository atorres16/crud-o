import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FormGeneratorModule } from './form-generator/form-generator.module';
import { HttpClientService } from './services/http-client.service';
import { AppRoutingModule } from './app-routing.module';
import { MenuModule } from './menu/menu.module';
import { PagedListModule } from './paged-list/paged-list.module';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './components/alert/alert.component';


@NgModule({
  declarations: [
    AppComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([]),
    HttpClientModule,
    AppRoutingModule,
    FormGeneratorModule,
    MenuModule,
    PagedListModule
  ],
  providers: [
    HttpClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
