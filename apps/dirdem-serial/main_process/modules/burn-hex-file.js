const child = require('child_process');
const { ipcMain } = require('electron');


module.exports = function burnHexFile(usbProgrammer) {
  ipcMain.on('burnHexFile', (event, arg) => {
    const avrdudeMicroLabel = arg[0];
    const hexFilePath = arg[1];

    const commandLine = `avrdude -c ${usbProgrammer} -p ${avrdudeMicroLabel} -U flash:w:${hexFilePath}:i`;

    child.exec(commandLine, (err, stdout, stderr) => {
      if (err) {
        event.reply('burnHexFileFailed', err);
        return;
      }
      let response = { stdout: stdout, stderr: stderr };
      event.reply('burnHexFileCompleted', response);
    });
  })
}
