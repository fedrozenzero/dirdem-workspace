const { ipcMain } = require('electron');
const serialport = require("serialport");
const ByteLength = require('@serialport/parser-byte-length')

function serialMonitorConnection() {
    ipcMain.on('startSerialMonitor', (event, arg) => {
        console.log(arg)

        const sp = new serialport('COM3', {
            baudRate: 9600,
        });
        const parser = sp.pipe(new ByteLength({ length: 1 }))
        parser.on('data', (data) => {
            event.reply('serialMonitorData', data);
        })
    });
}

module.exports = {serialMonitorConnection: serialMonitorConnection}


