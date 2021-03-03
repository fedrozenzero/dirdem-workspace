import { VoltageUnitMeasuresEnum } from "../shared/enums";

export interface Voltage {
  value: number;
  measureUnit: VoltageUnitMeasuresEnum;
}
