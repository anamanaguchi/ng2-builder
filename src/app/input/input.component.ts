import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ElementHelpersService } from '../shared/element-helpers.service';

@Component({
  selector: 'ui-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  constructor(
 	public _elementHelpersService:ElementHelpersService) {}

  ngOnInit() {
  }

  getElementClass(){
  	return this._elementHelpersService.getElementClass(this.attributes);
  }

  showMeLog(object){
  	console.log(object);
  }	

}
