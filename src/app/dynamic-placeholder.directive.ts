import { Directive, ComponentFactoryResolver, ComponentFactory, ComponentRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dynamicPlaceholder]'
})
export class DynamicPlaceholderDirective {
  constructor(
    private viewContainer: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver
    ){}

  createComponent(component){

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component.elementType);
    let componentRef = this.viewContainer.createComponent(componentFactory);
    componentRef.instance['attributes'] = component.attributes;
  }

  createDynamicComponents(components){
    for (let component of components) {
      this.createComponent(component);
    }
  }
}
