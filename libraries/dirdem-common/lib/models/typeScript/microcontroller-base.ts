import { CommunicationInterface } from './communication-interface';
import { ElectricalCharateristics } from './electrical-charateristics';
import { MemorySegment } from './memory-segment';
import { ElectronicUnit } from './electronic-unit';
import { MicrocontrollerPinConfiguaration } from './microcontroller-pin-configuration';
import { PeripheralFeatures } from './peripheral-features';
import { MicrocontrollerNamesEnum, MicroBrandsEnum, MicroFamiliesEnum, MicrocontrollerPackageEnum, PinTypesEnum } from '../../shared/enums';

/**
 * MicrocontrollerBase
 * Note:
 * - imageSrc: è un array perchè avrò un'immagine per ogni package
 */
export class MicrocontrollerBase {
  name: MicrocontrollerNamesEnum;
  brand: MicroBrandsEnum;
  family: MicroFamiliesEnum;
  datasheetUrl: string;
  dataBus: ElectronicUnit;
  memorySegments: MemorySegment [];
  electricalCharateristics: ElectricalCharateristics;
  microcontrollerPinConfigurations: MicrocontrollerPinConfiguaration [];
  peripheralFeatures: PeripheralFeatures;
  communicationInterfaces: CommunicationInterface [];

  constructor(microcontrollerBase?: MicrocontrollerBase) {
    if (microcontrollerBase) {
      this.name = microcontrollerBase.name;
      this.brand = microcontrollerBase.brand;
      this.family = microcontrollerBase.family;
      this.datasheetUrl = microcontrollerBase.datasheetUrl;
      this.dataBus = microcontrollerBase.dataBus;
      this.memorySegments = microcontrollerBase.memorySegments;
      this.electricalCharateristics = microcontrollerBase.electricalCharateristics;
      this.microcontrollerPinConfigurations = microcontrollerBase.microcontrollerPinConfigurations;
      this.peripheralFeatures = microcontrollerBase.peripheralFeatures;
      this.communicationInterfaces = microcontrollerBase.communicationInterfaces;
    }
  }

  /**
   * Restituisce la configurazione dei pin del microcontrollore
   * @param microcontrollerPackage Tipo di package per il quale si vuole conoscere la configurazione dei pin
   */
  microcontrollerPinConfiguration?(microcontrollerPackage: MicrocontrollerPackageEnum, defaultPinCount: number) {
    return this.microcontrollerPinConfigurations.find(config => config.microcontrollerPackage == microcontrollerPackage && config.defaultPinCount == defaultPinCount);
  }

  /**
  * Restituiscre il numero di Pin del microcontrollore
  * @param microcontrollerPackage Tipo di package per il quale si vuole conoscere il numero di pin
  */
  pinCount?(microcontrollerPackage: MicrocontrollerPackageEnum, defaultPinCount: number): number {
    const pinConfiguration = this.microcontrollerPinConfiguration(microcontrollerPackage, defaultPinCount);
    let pc = pinConfiguration.pins.length;
    if (pc == pinConfiguration.defaultPinCount) {
      return pc;
    } else {
      return null;
    }
  };

  /**
   * Restituisce il numero delle I/O lines programmabili del microcontrollore
   * @param microcontrollerPackage Tipo di package per il quale si vuole conoscere il numero di I/O lines
   */
  programmableIoLines?(microcontrollerPackage: MicrocontrollerPackageEnum, defaultPinCount: number): number {
    const pinConfiguration = this.microcontrollerPinConfiguration(microcontrollerPackage, defaultPinCount);
    let ioLines = pinConfiguration.pins.filter(pin => {
      return pin.pinType == PinTypesEnum.IO
    })
    return ioLines.length;
  }
}


