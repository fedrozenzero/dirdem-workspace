import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirdemCommonModule } from 'libraries/dirdem-common/lib/dirdem-common.module';
import { MaterialModule } from 'libraries/material/material.module';
import { SerialMonitorComponent } from './components/serial-monitor/serial-monitor.component';


@NgModule({
  declarations: [
    SerialMonitorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    DirdemCommonModule
  ],
  exports: [
    SerialMonitorComponent
  ]
})
export class SerialMonitorModule { }
