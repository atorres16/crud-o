import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Item } from 'src/app/models/item';
import { Form } from '../../../models/form';


@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {

  @Input() Form!: Form;
  @Input() Field!: Item;
  @Input() FormGroup!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
