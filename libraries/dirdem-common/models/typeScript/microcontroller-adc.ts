import { MicrocontrollerAdcNamesEnum } from "libraries/dirdem-common/shared/enums";
import { ElectronicUnit } from "./electronic-unit";

export interface MicrocontrollerAdc {
  microcontrollerAdcName: MicrocontrollerAdcNamesEnum;
  microcontrollerAdcResolution: ElectronicUnit;
}
