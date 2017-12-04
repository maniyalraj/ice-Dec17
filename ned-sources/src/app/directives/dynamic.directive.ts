import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ad-host]',
})
export class DynamicDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

