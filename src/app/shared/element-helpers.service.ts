import { Injectable, Component } from '@angular/core';

@Injectable()
export class ElementHelpersService {
	
	private listOfComponents: any[];

	constructor() {}

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
