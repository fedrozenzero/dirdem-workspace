const { ipcMain } = require('electron');
const SerialPort = require('serialport')

module.exports = function getSerialPortValues() {
    ipcMain.on('getSerialPorts', event => {
        SerialPort.list().then((res) => {
            const spList = res.map((portInfoObj, index) => {
                return {
                    id: index,
                    port: portInfoObj.path,
                    description: `${portInfoObj.path} ${portInfoObj.manufacturer}`
                }
            });
            event.reply('serialPortsCompleted', spList);
        }).catch((err) => {
            event.reply('mainProcessError', err);
        });
    });
}
