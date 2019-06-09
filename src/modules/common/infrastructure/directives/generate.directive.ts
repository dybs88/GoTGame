import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[got-generate]"
})
export class GenerateDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
