import { MicrocontrollerTimerInterruptSourcesListEnum } from "../shared/enums";

export interface MicrocontrollerTimerInterruptSource {
  microcontrollerTimerInterruptSourceEnable: boolean;
  microcontrollerTimerInterruptSourcesList?: MicrocontrollerTimerInterruptSourcesListEnum;
}
