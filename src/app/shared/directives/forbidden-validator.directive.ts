import { Directive } from '@angular/core';
import {Validator, FormControl, NG_VALIDATORS} from "@angular/forms";

@Directive({
  selector: '[appValidateInputValue]',
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true}]
})
export class ForbiddenValidatorDirective implements Validator {

  validator: Function;
  constructor() {
    this.validator = validateValueFactory();
  }

  validate(c: FormControl) {
    return this.validator(c);
  }
}


function validateValueFactory() {
  return (c: FormControl) => {
    let VALUE_REGEXP = /^([a-zA-Z0-9_-]){3,}$/i;
    let isValid = VALUE_REGEXP.test(c.value);
    return isValid ? null : {
      validateValue: {
        valid: false
      }
    };
  };
}