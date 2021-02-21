import { MicrocontrollerTimerNamesEnum, PinLabelsEnum } from "libraries/dirdem-common/shared/enums";
import { ElectronicUnit } from "./electronic-unit";
import { MicrocontrollerTimerFeature } from "./microcontroller-time-feature";
import { MicrocontrollerTimerPrescaler } from "./microcontroller-time-prescaler";
import { MicrocontrollerTimerInterruptSource } from "./microcontroller-timer-interrupt-source";

export interface MicrocontrollerTimer {
  microcontrollerTimerName: MicrocontrollerTimerNamesEnum;
  microcontrollerWidthCounter: ElectronicUnit;
  microcontrollerTimerPrescaler : MicrocontrollerTimerPrescaler;
  microcontrollerTimerInterruptSources: MicrocontrollerTimerInterruptSource;
  microcontrollerTimerPinInvolved?: PinLabelsEnum [];
  microcontrollerTimerFeatures?: MicrocontrollerTimerFeature [];
}
