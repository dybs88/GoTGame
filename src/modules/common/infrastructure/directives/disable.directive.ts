import { Directive, ViewContainerRef, TemplateRef, Input, SimpleChanges, ElementRef, Renderer2 } from "@angular/core";

@Directive({
  selector: "[gotDisable]"
})
export class DisableDirective {
  constructor(private element: ElementRef,
    private container: ViewContainerRef,
    private template: TemplateRef<Object>,
    private renderer: Renderer2) {
    this.container.clear();
    this.container.createEmbeddedView(this.template);
     }

  @Input("gotDisable")
  gotDisable: boolean;

  ngOnChanges(changes: SimpleChanges) {
    const change = changes["gotDisable"];
    const inputs = this.findInputs(this.element.nativeElement.nextSibling, new Array());
    if (change.isFirstChange() && !change.currentValue) {
    } else if (change.currentValue) {
      for (let i = 0; i < inputs.length; i++) {
        this.renderer.setAttribute(inputs[i], "disabled", "true");
      }
    } else {
      for (let i = 0; i < inputs.length; i++) {
        this.renderer.removeAttribute(inputs[i], "disabled");
      }
    }
  }

  findInputs(element: any, array: any): any {
    const result = array;

    if (element.children.length > 0) {
      for (let i = 0; i < element.children.length; i++) {
        if (element.children[i].tagName === "INPUT") {
          result.push(element.children[i]);
        } else {
          this.findInputs(element.children[i], result);
        }
      }
    }

    return result;
  }
}
