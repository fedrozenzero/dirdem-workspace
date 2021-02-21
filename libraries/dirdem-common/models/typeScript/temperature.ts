import { TemperatureMeasuresEnum } from "libraries/dirdem-common/shared/enums";

export interface Temperature {
  value: number;
  measureUnit: TemperatureMeasuresEnum;
}
