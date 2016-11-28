import { Component, ViewChild, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'

import { SectionComponent } from './section/section.component';
import { InputComponent } from './input/input.component';

import { DynamicPlaceholderDirective } from './dynamic-placeholder.directive';

@Component({
	selector: 'ng2-builder',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	entryComponents: [SectionComponent, InputComponent]
})
export class AppComponent {
	@ViewChild(DynamicPlaceholderDirective) dynamicPlaceholder: DynamicPlaceholderDirective;

    ngOnInit() {
 		
    	let allElements = [
    		{
    			elementType: InputComponent,
    			attributes: {
    				class: ['col12', 'ui-input'],
    				name: 'say-hello',
    				id: 'say-hello',
    				placeholder: 'Say hello',
    				label: 'Please say hello'
    			}
    		},
    		{
    			elementType: SectionComponent,
    			attributes: {
    				class: ['col12', 'ui-section'],
    				name: 'Personal info section',
    				id: 'personal-info',
    				label: 'Please enter your personal informations',
    				elements: [
    				{
		    			elementType: InputComponent,
		    			attributes: {
		    				class: ['col12', 'ui-input'],
		    				name: 'first-name',
		    				id: 'first-name',
		    				placeholder: 'First name',
		    				label: 'Please enter your first name'
		    			}
		    		}]
    		    }
    	    }
    	];
        this.dynamicPlaceholder.createDynamicComponents(allElements);
    }
}
