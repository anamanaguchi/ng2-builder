import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ElementHelpersService } from '../shared/element-helpers.service';

@Component({
	selector: 'json-input',
	templateUrl: './input.component.html',
	styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

	private attributes:any;

	constructor() {
	}

	ngOnInit() {
	}

}
