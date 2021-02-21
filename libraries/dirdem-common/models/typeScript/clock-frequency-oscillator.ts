import { ClockFrequenciesOscillatorMaterialEnum, ClockFrequenciesOscillatorTypeEnum } from "libraries/dirdem-common/shared/enums";
import { Frequency } from "./frequency";

/**
 * Le sorgenti di clock possono essere espresse o tramite una lista di valori assoluti
 * o tramite un range di valori. Il clock inoltre può essere prodotto interamente da
 * un circuito interno o può essere il risultato di componentistica esterna come
 * un quarzo o un filtro RC selezionati dall'utente
 */
export interface ClockFrequencyOscillator {
  clockFrequencyOscillatorValue?: Frequency;
  clockFrequencyOscillatorRange?: Frequency [];
  clockFrequencyOscillatorType?: ClockFrequenciesOscillatorTypeEnum;
  clockFrequencyOscillatorMaterial?: ClockFrequenciesOscillatorMaterialEnum;
  clockFrequencyOscillatorHexValueLow?: string;
  clockFrequencyOscillatorHexValueHigh?: string;
  clockFrequencyOscillatorHexValueExtended?: string;
}
