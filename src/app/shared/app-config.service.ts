import { Injectable, Component} from '@angular/core';
import { Http, JsonpModule, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { SectionComponent } from '../section/section.component';
import { InputComponent } from '../input/input.component';

@Injectable()
export class AppConfigService {
	
	public listOfComponents: any[];

	constructor (private http: Http) {
		this.listOfComponents = [SectionComponent, InputComponent]
	}
	
	getConfigFile() {
		return this.http.get('./data/_appConfig.json').map((res:Response) => res.json());
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
}