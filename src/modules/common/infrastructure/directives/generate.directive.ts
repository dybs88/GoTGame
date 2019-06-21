import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[got-pawnGenerator]"
})
export class GeneratePawnDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

@Directive({
  selector: "[got-windowGenerator]"
})
export class GenerateWindowDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
