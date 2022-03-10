import { Injectable } from '@angular/core';
import { SelectFromCatalogComponent } from '../form-generator/components/select-from-catalog/select-from-catalog.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  SelectFromCatalog?: SelectFromCatalogComponent;

  constructor() {

  }

}

