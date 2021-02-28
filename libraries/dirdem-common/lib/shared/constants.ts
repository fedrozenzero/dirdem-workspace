export const MAIN_IN_PROCESSES =
{
   burnFuses: 'burnFuses',
   readFuses: 'readFuses',
   burnArduinoUnoBootloader: 'burnArduinoUnoBootloader',
   compileCProject: 'compileCProject',
   burnHexFile: 'burnHexFile',
   startSerialMonitor: 'startSerialMonitor',
   getSerialPorts: 'getSerialPorts'
}

export const MAIN_OUT_PROCESSES =
{
   mainProcessError: 'mainProcessError',
   burnFusesCompleted: 'burnFusesCompleted',
   readFusesCompleted: 'readFusesCompleted',
   burnArduinoUnoBootloaderCompleted: 'burnArduinoUnoBootloaderCompleted',
   compileCProjectCompleted: 'compileCProjectCompleted',
   burnHexFileCompleted: 'burnHexFileCompleted',
   burnFusesFailed: 'burnFusesFailed',
   burnArduinoUnoBootloaderFailed: 'burnArduinoUnoBootloaderFailed',
   compileCProjectFailed: 'compileCProjectFailed',
   burnHexFileFailed: 'burnHexFileFailed',
   incomingTerminalData: 'incomingTerminalData',
   serialMonitorData: 'serialMonitorData',
   serialPortsCompleted: 'serialPortsCompleted'
}

export const EXADECIMAL_REGEX_VALIDATOR = /[0-9A-Fa-f]{1,2}\b/
