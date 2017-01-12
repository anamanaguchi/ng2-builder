import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ElementHelpersService } from '../shared/element-helpers.service';

@Component({
  selector: 'ui-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {

	private attributes:any;

	constructor() {

	}

	ngOnInit() {
	}


}
