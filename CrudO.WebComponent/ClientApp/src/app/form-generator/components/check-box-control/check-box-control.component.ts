import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Item } from 'src/app/models/item';
import { Form } from '../../../models/form';

@Component({
  selector: 'app-check-box-control',
  templateUrl: './check-box-control.component.html',
  styleUrls: ['./check-box-control.component.css']
})
export class CheckBoxControlComponent implements OnInit {

  @Input() Form!: Form;
  @Input() Field!: Item;
  @Input() FormGroup!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
