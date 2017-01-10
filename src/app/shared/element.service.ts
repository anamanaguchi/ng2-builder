import { Injectable } from '@angular/core';

import { SectionComponent } from '../section/section.component';
import { InputComponent } from '../input/input.component';
import { TextareaComponent } from '../textarea/textarea.component';

@Injectable()
export class ElementService {

	private listOfComponents:any[];

	constructor() {
		this.listOfComponents = [SectionComponent, InputComponent, TextareaComponent]
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
