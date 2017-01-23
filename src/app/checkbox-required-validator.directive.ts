import { Directive, forwardRef, Attribute, ElementRef } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
	selector: '[checkboxRequired][ngModel],[checkboxRequired][formControlName],[checkboxRequired][formControl]',
	providers: [
		{provide: NG_VALIDATORS, useExisting: forwardRef(() => CheckboxRequiredValidator), multi: true}
	]
})
export class CheckboxRequiredValidator implements Validator {

	constructor(private el:ElementRef, @Attribute('checkboxRequired') public checkboxRequired:boolean) {
		this.el.nativeElement.required = this.checkboxRequired || null;
	}

	validate(c:AbstractControl):{ [key: string]: boolean} {
		if (!this.el.nativeElement.checked) {
			return {
				required: true
			}
		}
		return {
			required: false
		}
	}

}
