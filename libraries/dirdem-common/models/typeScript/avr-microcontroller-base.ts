import { Fuse } from "./fuse-bit-base";
import { MicrocontrollerBase } from "./microcontroller-base";

export class AvrMicrocontrollerBase extends MicrocontrollerBase {
  avrLabel: string;
  fuses: Fuse [] = [];
}
