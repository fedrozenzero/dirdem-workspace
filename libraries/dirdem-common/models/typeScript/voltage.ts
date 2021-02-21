import { VoltageUnitMeasuresEnum } from "libraries/dirdem-common/shared/enums";

export interface Voltage {
  value: number;
  measureUnit: VoltageUnitMeasuresEnum;
}
