import { AfterViewInit, Component, ElementRef, EventEmitter, Input, NgZone, OnInit, Output, ViewChild } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, timeout } from 'rxjs';
import { Form } from '../../../models/form';


import { FormsService } from '../../services/forms.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, AfterViewInit {


  Form: Form | undefined;
  FormGroup: FormGroup | undefined;
  busy?: Promise<any> | Subscription;
  @Output() SaveClicked = new EventEmitter<Form>();
  @Output() DeleteClicked = new EventEmitter();


  constructor(private formsService: FormsService, private ngZone: NgZone) {
  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }

  onSubmit = () => {
    if (this.FormGroup != null) {
      var payLoad = this.FormGroup?.getRawValue();
      this.SaveClicked.emit(payLoad);
    }
  }

  Start(form: Form) {
    this.Form = form;
    var formGroup = this.formsService.GetFormGroup(this.Form);
    this.FormGroup = formGroup;
    console.log("fg");
    console.log(this.FormGroup);
  }

  Delete = () => {
    var payLoad = this.FormGroup?.getRawValue();
    this.DeleteClicked.emit(payLoad);
  }


  alert = (message: string, type: string) => {
    this.ngZone.run(() => {
      let element = document.getElementById('liveAlertPlaceholder') as HTMLElement;

      var wrapper = document.createElement('div');
      wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
      if (element) {
        (element as any).append(wrapper);
      }
      console.log(element);
    });

  }
}

