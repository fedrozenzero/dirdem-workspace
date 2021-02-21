import { PowerConsumptionModeNamesEnum } from "libraries/dirdem-common/shared/enums";
import { Current } from "./current";

export interface PowerConsumptionMode {
  powerConsumptionModeName: PowerConsumptionModeNamesEnum;
  powerConsumptionModeCurrent: Current;
}
