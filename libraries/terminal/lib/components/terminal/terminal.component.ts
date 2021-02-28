import { Component } from '@angular/core';
import { MAIN_OUT_PROCESSES } from 'libraries/dirdem-common/public-api';
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
    this.electronService.ipcRenderer.on(MAIN_OUT_PROCESSES.mainProcessError, (evt, arg) => {
      this.terminal.write(arg)
    })
  }

}
