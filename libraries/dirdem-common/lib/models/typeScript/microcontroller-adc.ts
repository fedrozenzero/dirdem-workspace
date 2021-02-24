import { MicrocontrollerAdcNamesEnum } from "../../shared/enums";
import { ElectronicUnit } from "./electronic-unit";

export interface MicrocontrollerAdc {
  microcontrollerAdcName: MicrocontrollerAdcNamesEnum;
  microcontrollerAdcResolution: ElectronicUnit;
}
