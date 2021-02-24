import { TemperatureMeasuresEnum } from "../../shared/enums";

export interface Temperature {
  value: number;
  measureUnit: TemperatureMeasuresEnum;
}
