const child = require('child_process');
const { ipcMain } = require('electron');


module.exports = function burnArduinoUnoBootloader(usbProgrammer) {
  ipcMain.on('burnArduinoUnoBootloader', (event, arg) => {
    const avrdudeMicroLabel = arg[0];
    const bootloaderPath =  'resources/bootloaders/arduino/optiboot_atmega328.hex';

    const commandLine = `avrdude -u -c ${usbProgrammer} -p ${avrdudeMicroLabel} -e -U flash:w:"${bootloaderPath}":a`;

    child.exec(commandLine, (err, stdout, stderr) => {
      if (err) {
        event.reply('burnArduinoUnoBootloaderFailed', err);
        return;
      };
      let response = {stdout: stdout, stderr: stderr};
      event.reply('burnArduinoUnoBootloaderCompleted', response);
    });
  })
}

