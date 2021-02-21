import { ElectronicUnitMeasuresEnum } from "libraries/dirdem-common/shared/enums";

export interface ElectronicUnit {
  value: number;
  measureUnit: ElectronicUnitMeasuresEnum;
}
