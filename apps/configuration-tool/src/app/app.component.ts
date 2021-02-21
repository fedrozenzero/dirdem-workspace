import { Component } from '@angular/core';
import { ATMEGA328P } from 'libraries/dirdem-common/microcontrollers/ATmega328P';
import { AvrMicrocontroller } from 'libraries/dirdem-common/models/typeScript/avr-microcontroller';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'configuration-tool';
  microcontroller = new AvrMicrocontroller(<any>ATMEGA328P);

}
