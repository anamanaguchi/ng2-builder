import { Component, ViewChild, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DynamicPlaceholderDirective } from '../dynamic-placeholder.directive';
import { ElementService } from '../shared/element.service';
import { ElementHelpersService } from '../shared/element-helpers.service';

@Component({
	selector: 'ui-section',
	templateUrl: './section.component.html',
	styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

	@ViewChild(DynamicPlaceholderDirective) dynamicPlaceholder:DynamicPlaceholderDirective;
	private attributes:any;

	constructor(private _elementService:ElementService, private _elementHelpersService:ElementHelpersService) {
	}

	ngOnInit() {
		if (this.attributes && this.attributes.elements) {
			let elements = this._elementService.getElements(this.attributes);
			if (elements) {
				this.dynamicPlaceholder.createDynamicComponents(elements);
			}
		}
	}

	getElementClass() {

		return this._elementHelpersService.getElementClass(this.attributes);

	}
}
