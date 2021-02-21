import { MicrocontrollerPackageEnum } from "libraries/dirdem-common/shared/enums";
import { MicrocontrollerPin } from "./microcontroller-pin";

export class MicrocontrollerPinConfiguaration {
  microcontrollerPackage: MicrocontrollerPackageEnum;
  defaultPinCount: number;
  pinoutImagesSrc?: string [];
  pins?: MicrocontrollerPin [];
}
