export const MAIN_IN_PROCESSES =
{
   burnFuses: 'burnFuses',
   readFuses: 'readFuses',
   burnArduinoUnoBootloader: 'burnArduinoUnoBootloader',
   compileCProject: 'compileCProject',
   burnHexFile: 'burnHexFile',
   sendSerialMonitorData: 'sendSerialMonitorData'
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
   incomingSerialMonitorData: 'incomingSerialMonitornData',
}

export const EXADECIMAL_REGEX_VALIDATOR = /[0-9A-Fa-f]{1,2}\b/
