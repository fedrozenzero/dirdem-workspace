import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AvrTechnicalSpecificationsCardComponent } from './components/avr-technical-specifications-card/avr-technical-specifications-card.component';


@NgModule({
  declarations: [
    AvrTechnicalSpecificationsCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AvrTechnicalSpecificationsCardComponent
  ]
})
export class TechnicalSpecificationsModule { }
