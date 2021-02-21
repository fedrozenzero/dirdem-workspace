import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Fuse } from "libraries/dirdem-common/models/typeScript/fuse-bit-base";
import { EXADECIMAL_REGEX_VALIDATOR } from "libraries/dirdem-common/shared/constants";

export class FuseBitFormValidator {
  private _formGroup: FormGroup;
  get formGroup() {
    return this._formGroup;
  }

  constructor(fb: FormBuilder, fuses: Fuse[]){

    const validators = [
      Validators.maxLength(2),
      Validators.required,
      Validators.pattern(EXADECIMAL_REGEX_VALIDATOR)
    ]

    this._formGroup = fb.group({ });

    fuses.forEach((fuse, i)=> {
      const ctrl = new FormControl(fuse.hexValue, validators);
      this._formGroup.addControl(i.toString(), ctrl)
    })

  }
}
