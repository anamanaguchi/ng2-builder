import { Injectable } from '@angular/core';

import { SectionComponent } from '../section/section.component';
import { InputComponent } from '../input/input.component';
import { TextareaComponent } from '../textarea/textarea.component';
import { RadioComponent } from '../radio/radio.component';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { SelectComponent } from '../select/select.component';
import { ButtonComponent } from '../button/button.component';
import { TextContentComponent } from '../text-content/text-content.component';

@Injectable()
export class ElementService {

	private listOfComponents:any;

	constructor() {
		this.listOfComponents = {
			"SectionComponent": () => SectionComponent,
			"InputComponent": () => InputComponent,
			"TextareaComponent": () => TextareaComponent,
			"RadioComponent": () => RadioComponent,
			"CheckboxComponent": () => CheckboxComponent,
			"SelectComponent": () => SelectComponent,
			"ButtonComponent": () => ButtonComponent,
			"TextContentComponent": () => TextContentComponent
		};
	}

	manageElementType(elementType:string) {
		console.log(this.listOfComponents);
		return this.listOfComponents[elementType]();
	}

	getElements(configFile) {
		for (let element of configFile.elements) {
			let elementType = element.elementType;
			element.elementType = this.manageElementType(elementType);
		}
		return configFile.elements;
	}

}
