import { CurrentsMeasureUnitEnum } from "libraries/dirdem-common/shared/enums";

export interface Current {
  currentValue: number;
  currentMeasureUnit: CurrentsMeasureUnitEnum;
}
