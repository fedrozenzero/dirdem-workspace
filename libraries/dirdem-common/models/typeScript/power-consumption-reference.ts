import { Frequency } from "./frequency";
import { Temperature } from "./temperature";
import { Voltage } from "./voltage";

export interface PowerConsumptionReference {
  powerConsumptionReferenceFrequency?: Frequency;
  powerConsumptionReferenceVoltage?: Voltage;
  powerConsumptionReferenceTemperature?: Temperature;
}
