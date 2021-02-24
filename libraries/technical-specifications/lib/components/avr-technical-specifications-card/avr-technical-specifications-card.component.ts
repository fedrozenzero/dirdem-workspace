import { Component, Input, OnInit } from '@angular/core';
import { AvrMicrocontroller, MicrocontrollerPinConfiguaration } from 'libraries/dirdem-common/public-api';

@Component({
  selector: 'lib-avr-technical-specifications-card',
  templateUrl: './avr-technical-specifications-card.component.html',
  styleUrls: ['./avr-technical-specifications-card.component.css']
})
export class AvrTechnicalSpecificationsCardComponent {

  @Input() microcontroller: AvrMicrocontroller;
  @Input() microcontrollerPinConfiguration: MicrocontrollerPinConfiguaration;
  flashPackageOutput: boolean = false;
  /**
   * se ritorna nullo il defaultPinCount non corrisponde alla somma dei pin nell'array pins in MicrocontrollerPinConfiguaration
   */
  get microcontrollerPinCount(): number {
    return this.microcontroller.pinCount(this.microcontrollerPinConfiguration.microcontrollerPackage, this.microcontrollerPinConfiguration.defaultPinCount);
  }

  get microcontrollerIoLines(): number {
    return this.microcontroller.programmableIoLines(this.microcontrollerPinConfiguration.microcontrollerPackage, this.microcontrollerPinConfiguration.defaultPinCount);
  }

  get operatingVoltagesStringify(): string {
    let orderedvalues = this.microcontroller.electricalCharateristics.operatingVoltageRange.sort((a, b) => {
      return a.value - b.value;
    })
    return `${orderedvalues[0].value} ${orderedvalues[0].measureUnit} - ${orderedvalues[1].value} ${orderedvalues[1].measureUnit}`;
  }

  constructor() { }

  ngOnChanges() { }

}
