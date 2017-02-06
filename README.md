# Ng2Builder
**Simple Angular2 app which generates user form components from JSON file.**

### Demo
https://anamanaguchi.github.io/ng2-builder/

### Quick start
```shell
npm install
npm install -g angular-cli
ng build
ng serve
```

### Available components
##### SectionComponent
Component that wraps other components into one section element.

**JSON example**
```json
{
    "elementType": "SectionComponent",
	"attributes": {
		"name": "Sample section",
		"id": "sample-input-field",
		"label": "This is example of section component.",
		"wrapperClass": ['class1','class2'],
		"class": ["section-class"],
		"elements": [{}] 
	}
}
```
##### TextContentComponent
Component that display text block with title.

**JSON example**
```json
{
    "elementType": "TextContentComponent",
    "attributes": {
        "title": "Hello world from text content component!",
        "content": "Vestibulum ante ipsum primis in faucibus orci luctus et.",
        "class": ["sample-class"]
	}
}
```

##### InputComponent
Form text input component. 

**JSON example**
```json
{
	"elementType": "InputComponent",
		"attributes": {
			"name": "sample-input",
			"id": "sample-input",
			"placeholder": "Inputs placeholder",
			"label": "Elements label*",
			"class": ["sample-class"],
			"wrapperClass": ["wrapper-class1"],
			"labelClass": ["label-class1"],
			"validation": {
			"required": {
				"value": true,
				"error": "This field is required!"
			}
		}
	}
}
```
##### TextareaComponent
Form textarea component. 

**JSON example**
```json
{
	"elementType": "TextareaComponent",
	"attributes": {
		"rows": 2,
		"name": "sample-name",
		"id": "sample-id",
		"defaultValue": "",
		"placeholder": "Elements placeholder",
		"label": "Elements label*",
		"class": ["sample-class"],
		"wrapperClass": ["sample-wrapper-class"],
		"labelClass": ["sample-label-class"],
		"validation": {
			"required": {
				"value": true,
				"error": "This field is required!"
			}
		}
	}
}
```

##### RadioComponent
Form radio component. 

**JSON example**
```json
{
	"elementType": "RadioComponent",
	"attributes": {
		"name": "Sex",
		"id": "sex",
		"wrapperClass": [
			"mdl-grid"
		],
		"options": [
			{
				"value": "male",
				"label": "Male",
				"class": ["mdl-radio__button"],
				"labelClass": ["mdl-radio__label"],
				"wrapperClass": ["mdl-radio","mdl-js-radio"]
			},
			{
				"value": "female",
				"label": "Female",
				"class": ["mdl-radio__button"],
				"labelClass": ["mdl-radio__label"],
				"wrapperClass": ["mdl-radio","mdl-js-radio"],
				"checked": true
			}
		]
	}
}
```
##### CheckboxComponent
Form checkbox component. 

**JSON example**
```json
{
	"elementType": "CheckboxComponent",
	"attributes": {
		"name": "terms",
		"id": "terms",
		"checked": false,
		"label": "Accept terms and conditions*",
		"class": ["mdl-checkbox__input"],
		"wrapperClass": ["mdl-cell","mdl-checkbox","mdl-js-checkbox","mdl-cell--12-col"],
		"labelClass": ["mdl-checkbox__label"],
		"validation": {
			"required": {
				"value": true,
				"error": "This field is required!"
			}
		}
	}
}
```
##### SelectComponent
Form select component.

**JSON example**
```json
{
	"elementType": "SelectComponent",
	"attributes": {
		"name": "gender",
		"id": "gender",
		"label": "Please, choose an option*",
		"options": [
			{
				"value": "option1",
				"label": "Option 1"
			},
			{
				"value": "option2",
				"label": "Option 2",
				"selected": true
			}
		],
		"wrapperClass": ["mdl-selectfield","mdl-js-selectfield","mdl-selectfield--floating-label","mdl-cell","mdl-cell--12-col"],
		"labelClass": ["mdl-selectfield__label"],
		"class": ["mdl-selectfield__select"],
		"validation": {
			"required": {
				"value": true,
				"error": "This field is required!"
			}
		}
	}
}
```
##### ButtonComponent
Form button component.

**JSON example**
```json
{
	"elementType": "ButtonComponent",
	"attributes": {
		"type": "submit",
		"disabled": false,
		"label": "Submit form",
		"class": ["mdl-button","mdl-js-button","mdl-button--raised","mdl-js-ripple-effect","mdl-button--accent","mdl-cell","mdl-cell--12-col"]
	}
}
```
