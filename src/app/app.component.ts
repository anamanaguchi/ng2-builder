import { Component, ViewChild, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'

import { SectionComponent } from './section/section.component';
import { InputComponent } from './input/input.component';
import { AppConfigService } from './shared/app-config.service';
import { DynamicPlaceholderDirective } from './dynamic-placeholder.directive';

declare let componentHandler:any;

@Component({
	selector: 'ng2-builder',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	entryComponents: [SectionComponent, InputComponent]
})
export class AppComponent {
	@ViewChild(DynamicPlaceholderDirective) dynamicPlaceholder:DynamicPlaceholderDirective;

	constructor(private _appConfigService:AppConfigService) {
	}

	getElements() {
		this._appConfigService.getConfigFile().subscribe(
			data => {
				let elements = this._appConfigService.getElements(data);
				if (elements) {
					this.dynamicPlaceholder.createDynamicComponents(elements);
				}
			},
			err => {
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
