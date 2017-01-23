import { Injectable } from '@angular/core';

import { SectionComponent } from '../section/section.component';
import { InputComponent } from '../input/input.component';
import { TextareaComponent } from '../textarea/textarea.component';
import { RadioComponent } from '../radio/radio.component';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { SelectComponent } from '../select/select.component';

@Injectable()
export class ElementService {

	private listOfComponents:any[];

	constructor() {
		this.listOfComponents = [SectionComponent, InputComponent, TextareaComponent, RadioComponent, CheckboxComponent, SelectComponent]
	}

	manageElementType(elementType:String) {
		let result = elementType;
		for (let component of this.listOfComponents) {
			if (component.name === elementType) {
				result = component;
			}

		}
		return result;
	}

	getElements(configFile) {
		for (let element of configFile.elements) {
			let elementType = element.elementType;
			element.elementType = this.manageElementType(elementType);
		}
		return configFile.elements;
	}

}
