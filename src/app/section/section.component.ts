import { Component, ViewChild, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DynamicPlaceholderDirective} from '../dynamic-placeholder.directive';
import { AppConfigService } from '../shared/app-config.service';

@Component({
	selector: 'ui-section',
	templateUrl: './section.component.html',
	styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {
	
	@ViewChild(DynamicPlaceholderDirective) dynamicPlaceholder: DynamicPlaceholderDirective;
  	
  	constructor(
        private _appConfigService: AppConfigService) {}

	ngOnInit() {
		let attributes = this['attributes'];

		
		if(attributes && attributes.elements){
			let elements = this._appConfigService.getElements(attributes);
			if(elements){
  				this.dynamicPlaceholder.createDynamicComponents(elements);
  			}
  		}
  	}
}