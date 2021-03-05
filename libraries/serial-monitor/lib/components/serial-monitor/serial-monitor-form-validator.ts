import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class SerialMonitorFormValidator {

  private _formGroup: FormGroup
  get formGroup() { return this._formGroup }

  get port() { return this._formGroup.get('port') }
  get baudRate() { return this._formGroup.get('baudRate') }


  constructor(fb: FormBuilder) {
    this._formGroup = fb.group({
      port: ['', [Validators.required]],
      baudRate: ['', [Validators.required]]
    })
  }

}
