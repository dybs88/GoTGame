import { Directive, forwardRef, Attribute } from "@angular/core";
import { NG_VALIDATORS, Validator, AbstractControl } from "@angular/forms";

@Directive({
  selector: "[minValue]",
  providers: [{provide: NG_VALIDATORS, useExisting: forwardRef(() => MinValueDirective), multi: true}]
})
export class MinValueDirective implements Validator {
  constructor( @Attribute("minValue") public minValue: any) { }

  validate(control: AbstractControl): {[key: string]: any} {
    const controlValue = control.value;

    if (controlValue < this.minValue) {
      return { minValue: false };
    }

    return null;
  }
}
