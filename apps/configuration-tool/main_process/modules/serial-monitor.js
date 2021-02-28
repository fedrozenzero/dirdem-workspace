const { ipcMain } = require('electron');
const serialport = require("serialport");
const ByteLength = require('@serialport/parser-byte-length')

module.exports = function serialMonitorConnection() {
    ipcMain.on('startSerialMonitor', (event, arg) => {
      const com = arg[0];
      const baudRate = arg[1];

        const sp = new serialport(com, {
            baudRate: baudRate,
        });
        const parser = sp.pipe(new ByteLength({ length: 1 }))
        parser.on('data', (data) => {
            console.log(data.toString())
            event.reply('serialMonitorData', data.toString());
        })
    });
}



