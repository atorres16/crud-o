import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VarDirective } from './directives/ng-var-directive';
import { FormsService } from './services/forms.service';
import { InputTextComponent } from './components/input-text/input-text.component';
import { CheckBoxControlComponent } from './components/check-box-control/check-box-control.component';
import { SelectFromCatalogComponent } from './components/select-from-catalog/select-from-catalog.component';
import { PagedListModule } from '../paged-list/paged-list.module';



@NgModule({
  declarations: [
    FormComponent,
    VarDirective,
    InputTextComponent,
    CheckBoxControlComponent,
    SelectFromCatalogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PagedListModule
  ],
  exports: [
    FormComponent,
    SelectFromCatalogComponent
  ],
  providers: [
    FormsService
  ]
})
export class FormGeneratorModule { }
