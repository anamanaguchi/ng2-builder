import { Component, OnInit } from '@angular/core';
import { Validator } from '@angular/forms';
import { CheckboxRequiredValidator } from '../checkbox-required-validator.directive';

@Component({
  selector: 'json-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logObject(object){
  	//console.log(object);
  }

}
