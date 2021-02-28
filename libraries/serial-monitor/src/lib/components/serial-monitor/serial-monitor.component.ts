import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SerialPort } from 'libraries/dirdem-common/lib/models/typeScript/serial-port';
import { MAIN_IN_PROCESSES, MAIN_OUT_PROCESSES } from 'libraries/dirdem-common/public-api';
import { ElectronService } from 'ngx-electron';
import { BAUD_RATE_VALUES } from '../../shared/constants';
import { SerialMonitorFormValidator } from './serial-monitor-form-validator';

@Component({
  selector: 'lib-serial-monitor',
  templateUrl: './serial-monitor.component.html',
  styleUrls: ['./serial-monitor.component.css']
})
export class SerialMonitorComponent implements OnInit {

  baudRateValues = BAUD_RATE_VALUES
  serialPortValues: string [] = ['pippo', 'pluto', 'sempronio']
  serialMonitorStarted = false

  formValidator: SerialMonitorFormValidator

  constructor(private electronService: ElectronService, private fb: FormBuilder) {
    this.formValidator = new SerialMonitorFormValidator(this.fb)
  }

  ngOnInit(): void {
    this.electronService.ipcRenderer.on(MAIN_OUT_PROCESSES.serialPortsCompleted, (evt: any, arg: SerialPort[]) => {
      this.serialPortValues = arg.map(_ => _.description)
    })
  }

  onSerialSelectOpened(evt) {
    if (evt) {
      this.electronService.ipcRenderer.send(MAIN_IN_PROCESSES.getSerialPorts)
    }
  }

  startSerialMonitornConnection(){
    const port = 'COM3' //this.formValidator?.port?.value
    const baudRate = this.formValidator?.baudRate?.value
    this.electronService.ipcRenderer.send(MAIN_IN_PROCESSES.startSerialMonitor, [port, parseInt(baudRate) ])
  }

  stopSerialMonitorConnection() {

  }

}
