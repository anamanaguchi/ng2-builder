import { Injectable, Component } from '@angular/core';

import { SectionComponent } from '../section/section.component';
import { InputComponent } from '../input/input.component';

@Injectable()
export class ElementHelpersService {
	
	private listOfComponents: any[];

	constructor() { 
		this.listOfComponents = [SectionComponent, InputComponent]
	}

  	manageElementType(elementType:String){
		let result = elementType;
		for(let component of this.listOfComponents){
			if(component.name === elementType){
				result = component;
			}
		
		}
		return result;
	}

	getElements(configFile){
		for(let element of configFile.elements){
			let elementType = element.elementType;
			element.elementType = this.manageElementType(elementType);
		}
		return configFile.elements;
	}

	getElementClass(attributes){
		let classArray = [];

		if(attributes.class){
			for(let elClass of attributes.class){
				classArray.push(elClass);
			}
		}
		if(attributes.width){
			let width = attributes.width;
			for (let key in width) {
			  if (width.hasOwnProperty(key)) {
			  	let elWidth = width[key] > 0 && width[key] < 13 ? width[key] : 12; 
			  	classArray.push('mdl-cell','mdl-cell--'+elWidth+'-col-'+key);
			  }
			}
		}else{
			classArray.push('mdl-cell','mdl-cell--12-col');
		}

		return classArray;
	}

}
