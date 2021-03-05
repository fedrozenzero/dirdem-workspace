import { PowerConsumptionModeNamesEnum } from "../shared/enums";
import { Current } from "./current";

export interface PowerConsumptionMode {
  powerConsumptionModeName: PowerConsumptionModeNamesEnum;
  powerConsumptionModeCurrent: Current;
}
