const child = require('child_process');
const { ipcMain } = require('electron');


module.exports = function burnFuseBit(usbProgrammer) {
  ipcMain.on('burnFuses', (event, arg) => {
    const avrdudeMicroLabel = arg[0];
    // obj array [{ avrdudeFuseType, value }]
    const avrdudeFuses = arg[1];
    var commandLine = `avrdude -u -c ${usbProgrammer} -p ${avrdudeMicroLabel} `;

    avrdudeFuses.forEach(fuse => {
      if (fuse.avrdudeFuseType == 'lfuse') {
        commandLine += `-U lfuse:w:${fuse.hexValue}:m `;
      }
      if (fuse.avrdudeFuseType == 'hfuse') {
        commandLine += `-U hfuse:w:${fuse.hexValue}:m `;
      }
      if (fuse.avrdudeFuseType == 'efuse') {
        commandLine += `-U efuse:w:${fuse.hexValue}:m `;
      }
    })

    child.exec(commandLine, (err, stdout, stderr) => {
      if (err) {
        event.reply('burnFusesFailed', err);
        return;
      }
      let response = { stdout: stdout, stderr: stderr };
      event.reply('burnFusesCompleted', response);
    });
  })
}
