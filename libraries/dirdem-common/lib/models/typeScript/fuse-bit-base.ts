import { FusesTypeEnum } from "../../shared/enums";
import { ConverterUtilities } from "../../utilities/ConverterUtilities";
import { FuseBit } from "./fuse-bit";

export class FuseBase {
  type: FusesTypeEnum;
  defaultBits: FuseBit[];
}

export class Fuse extends FuseBase {
  private _hexValue: string;
  get hexValue(): string { return this._hexValue };

  private _bits: FuseBit[];
  get bits(): FuseBit[] { return this._bits };

  /**
  * Aggiorna l'oggetto fuse attraverso un valore esadecimale
  * @param newHexValue Valore esadeciamale aggiornato
  */
  updateFuseByHexValue(newHexValue: string) {
    this._hexValue = newHexValue;
    let decValue = ConverterUtilities.hexToDec(newHexValue);
    this._bits.forEach(fuseBit => {
      fuseBit.value = ((decValue >> fuseBit.bit) & 1) == 1 ? true : false;
    })
  }

  /**
  * Aggiorna l'oggetto fuse attraverso un array di FuseBit
  * @param newFuseBitArray Array di FuseBit aggiornato
  */
  updateFuseByFuseBitArray(newFuseBitArray: FuseBit[]) {
    this._bits = newFuseBitArray;
    this._hexValue = this.fuseBitArrayToHex(newFuseBitArray);
  }

  /**
  * Converte un array di FuseBit in una numero esadecimale
  */
  fuseBitArrayToHex(fuseBitArray: FuseBit[]): string {
    let decValue = this.fuseBitArrayToDec(fuseBitArray);
    return ConverterUtilities.decToHex(decValue);
  }

  /**
  * Converte un array di 8 bit in un numero intero segna segno (max 255)
  */
  fuseBitArrayToDec(fusebitArray: FuseBit[]): number {
    let result = 0;
    fusebitArray.forEach(fuseBit => {
      if (fuseBit.value) {
        result += Math.pow(2, fuseBit.bit);
      }
    })
    return result;
  }

  constructor(fuseBitArray: FuseBit[], fuseType: FusesTypeEnum) {
    super();
    this.updateFuseByFuseBitArray(fuseBitArray);
    this.type = fuseType;
  }


  /**
  * prop vera quando il fuse bit è stato letto o scritto
  */
  defined?: boolean;
}
