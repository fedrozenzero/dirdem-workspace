import { PowerConsumptionMode } from "./power-consumption-mode";
import { PowerConsumptionReference } from "./power-consumption-reference";

export interface PowerConsumption {
  powerConsumptionReference: PowerConsumptionReference;
  powerConsumptionMode: PowerConsumptionMode;
}
