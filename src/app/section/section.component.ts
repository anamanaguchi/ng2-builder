import { Component, ViewChild, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DynamicPlaceholderDirective} from '../dynamic-placeholder.directive';

@Component({
	selector: 'ui-section',
	templateUrl: './section.component.html',
	styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
	@ViewChild(DynamicPlaceholderDirective) dynamicPlaceholder: DynamicPlaceholderDirective;
  	constructor() { }

	ngOnInit() {
		if(this['attributes'] && this['attributes']['elements']){
			console.log("ive got kids!",this['attributes']['elements']);
  			this.dynamicPlaceholder.createDynamicComponents(this['attributes']['elements']);
  		}
  	}
}