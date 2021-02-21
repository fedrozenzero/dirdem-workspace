import { MicrocontrollerAdc } from "./microcontroller-adc";
import { MicrocontrollerAnalogComparator } from "./microcontroller-analog-comparator";
import { MicrontrollerSleepMode } from "./microcontroller-sleep-mode";
import { MicrocontrollerTimer } from "./microcontroller-timer";

export interface PeripheralFeatures {
  microcontrollerTimers?: MicrocontrollerTimer [];
  microcontrollerAdcs?: MicrocontrollerAdc [];
  microcontrollerAnalogComparators?: MicrocontrollerAnalogComparator [];
  microcontrollerSleepModes?: MicrontrollerSleepMode [];
}
