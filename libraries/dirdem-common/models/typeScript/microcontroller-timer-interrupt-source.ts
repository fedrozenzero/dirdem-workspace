import { MicrocontrollerTimerInterruptSourcesListEnum } from "libraries/dirdem-common/shared/enums";

export interface MicrocontrollerTimerInterruptSource {
  microcontrollerTimerInterruptSourceEnable: boolean;
  microcontrollerTimerInterruptSourcesList?: MicrocontrollerTimerInterruptSourcesListEnum;
}
