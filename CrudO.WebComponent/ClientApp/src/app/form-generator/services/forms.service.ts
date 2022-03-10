import { Injectable } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Item } from 'src/app/models/item';
import { NavRoutes } from 'src/app/models/nav-routes';
import { Form } from '../../models/form';


@Injectable({
  providedIn: 'root'
})
export class FormsService {



  constructor(private fb: FormBuilder,
  ) { }


  GetFormGroup = (form: Form) => {
    console.log("form al momento de crear el form group");
    console.log(form);
    let _formGroup = this.fb.group({
      title: [form.title, Validators.required],
      type: [form.type, Validators.required],
      properties: this.GetFieldFormArray(form) as FormArray
    //  navRoutes: this.GetNavRoutesFormGroup(form.navRoutes!)
    });
    return _formGroup;
  }

  private GetFieldFormArray = (form: Form): FormArray => {
    let fields: FormArray = this.fb.array([]);
    if (form.properties) {
      for (const field of form.properties) {

        let fg = this.GetField(field);
        fields.push(fg);
      }
    }
    return fields;
  }


  public GetField = (field: Item) => {

    let group = this.fb.group({
      key: [field.key, Validators.required],
      value: [field.value, field.required === true ? Validators.required : null],
      label: [field.title],
      type: [field.type],
      isPrimaryKey: [field.isPrimaryKey],
      inputType: [field.inputType],
      description: [field.description],
      readOnly: [field.readOnly],
      hidden: [field.hidden],
      ignoreForUpsert: [field.ignoreForUpsert],
      apiGetFormPath: [field.navRoutes?.apiGetFormPath],
      apiUpsertPath: [field.navRoutes?.apiUpsertPath]
    });
    return group;
  }

  // GetNavRoutesFormGroup = (navRoutes: NavRoutes) => {
  //   let fg = this.fb.group(
  //     // {
  //     //   apiGetFormPath:navRoutes.apiGetFormPath
  //     //   apiGetDataPath:
  //     //   apiUpsertPath:
  //     //   apiDeletePath:
  //     //   apiGetDataContextPath:
  //     //   apiSelectFromCatalogPath:
  //     //   apiSelectedFromCatalogPath:
  //     // }
  //     navRoutes
  //   );
  // }




}
