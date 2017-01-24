import { Component, ViewChild, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'

import { SectionComponent } from './section/section.component';
import { InputComponent } from './input/input.component';
import { TextareaComponent } from './textarea/textarea.component';
import { RadioComponent } from './radio/radio.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { SelectComponent } from './select/select.component';
import { ButtonComponent } from './button/button.component';
import { TextContentComponent } from './text-content/text-content.component';

import { AppConfigService } from './shared/app-config.service';
import { ElementService } from './shared/element.service';
import { DynamicPlaceholderDirective } from './dynamic-placeholder.directive';

declare let componentHandler:any;

@Component({
	selector: 'ng2-builder',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	entryComponents: [SectionComponent, InputComponent, TextareaComponent, RadioComponent, CheckboxComponent, SelectComponent, ButtonComponent, TextContentComponent]
})
export class AppComponent {
	@ViewChild(DynamicPlaceholderDirective) dynamicPlaceholder:DynamicPlaceholderDirective;

	constructor(
		private _appConfigService:AppConfigService,
		private _elementService:ElementService) {}

	getElements() {
		this._appConfigService.getConfigFile().subscribe(
			data => {
				let elements = this._elementService.getElements(data);
				if (elements) {
					this.dynamicPlaceholder.createDynamicComponents(elements);
				}
			},
			err => {
				console.error('There is a problem with config file...')
			}
		);
	}

	ngOnInit() {
		this.getElements();
	}

	// upgrade all mdl components
	ngAfterViewChecked() {
		componentHandler.upgradeDom();
		//
	}
}
