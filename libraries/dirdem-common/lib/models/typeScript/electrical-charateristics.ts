import { ClockFrequencyOscillator } from "./clock-frequency-oscillator";
import { Frequency } from "./frequency";
import { PowerConsumption } from "./power-consumption";
import { Voltage } from "./voltage";

export interface ElectricalCharateristics {
    clockFrequencyMaxValue: Frequency;
    clockFrequencyOscillators: ClockFrequencyOscillator [];
    operatingVoltageRange: Voltage [];
    powerConsumption?: PowerConsumption;
}
