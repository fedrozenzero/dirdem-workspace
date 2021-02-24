import { Component } from '@angular/core';
import { ATMEGA328P, AvrMicrocontroller, MicrocontrollerPinConfiguaration } from 'libraries/dirdem-common/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'configuration-tool';
  microcontroller = new AvrMicrocontroller(<any>ATMEGA328P);
  microcontrollerPinConfiguration = this.microcontroller?.microcontrollerPinConfigurations[0];

}
