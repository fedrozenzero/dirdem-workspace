const USB_PROGRAMMER = 'usbasp';
// main processes
const electronMain = require('./modules/electron-main');
const burnArduinoUnoBootloader = require('./modules/burn-arduino-uno-bootloader');
const burnFuses = require('./modules/burn-fuses');
const readFuses = require('./modules/read-fuses');
const burnHexFile = require('./modules/burn-hex-file');
const compileCProject = require('./modules/compile-c-project');
const serialMonitorConnection = require('./modules/serial-monitor');

electronMain;

burnArduinoUnoBootloader(USB_PROGRAMMER);

burnFuses(USB_PROGRAMMER);

readFuses(USB_PROGRAMMER);

burnHexFile(USB_PROGRAMMER);

compileCProject();

serialMonitorConnection();
