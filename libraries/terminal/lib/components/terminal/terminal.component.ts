import { Component, OnInit } from '@angular/core';
import { MAIN_IN_PROCESSES, MAIN_OUT_PROCESSES } from 'libraries/dirdem-common/public-api';
import { ElectronService } from 'ngx-electron';
import { Terminal } from 'xterm';

@Component({
  selector: 'lib-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.css']
})
export class TerminalComponent {

  terminal = new Terminal({
    cursorStyle: 'bar',
    fontFamily: 'Consolas',
    fontSize: 13,
    fontWeight: '100',
    theme: {
        foreground: '#00FF00'
    }
})

  constructor(private electronService: ElectronService) { }

  ngAfterViewInit(): void {
    this.terminal.open(document.getElementById('terminal'))
    this.electronService.ipcRenderer.on(MAIN_OUT_PROCESSES.incomingTerminalData, (evt, arg) => {
      this.terminal.write(arg)
    })
    this.sendData()
  }


  sendData() {
    this.terminal.onData(e   => {
      this.electronService.ipcRenderer.send(MAIN_IN_PROCESSES.sendTerminalData, e)
    })
  }

  startSerialMonitornConnection(){
    this.electronService.ipcRender.send(MAIN_IN_PROCESSES.startSerialMonitor, ['COM3', 9600])
    this.electronService.ipcRender.on(MAIN_OUT_PROCESSES.serialMonitorData, (evt, arg) =>{
      this.terminal.write(arg);
    })

  }

}
