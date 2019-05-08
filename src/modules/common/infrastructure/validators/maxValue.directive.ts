import { Directive, forwardRef, Attribute } from "@angular/core";
import { NG_VALIDATORS, Validator, AbstractControl } from "@angular/forms";

@Directive({
  selector: "[maxValue]",
  providers: [{provide: NG_VALIDATORS, useExisting: forwardRef(() => MaxValueDirective), multi: true}]
})
export class MaxValueDirective implements Validator {
  constructor( @Attribute("maxValue") public maxValue: any) { }

  validate(control: AbstractControl): {[key: string]: any} {
    const controlValue = control.value;

    if (controlValue > this.maxValue && controlValue !== 999) {
      return { maxValue: false };
    }

    return null;
  }
}
