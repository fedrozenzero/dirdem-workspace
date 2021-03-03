import { Injectable } from '@angular/core';;
import { BehaviorSubject, Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { AvrMicrocontroller } from '../models/avr-microcontroller';
import { MicrocontrollerPinConfiguaration } from '../models/microcontroller-pin-configuration';


@Injectable({
  providedIn: 'root'
})
export class MicroService {
  private _microcontrollerSelected$ = new BehaviorSubject<AvrMicrocontroller>(new AvrMicrocontroller());
  private _microcontrollerPinConfiguration$ = new BehaviorSubject<MicrocontrollerPinConfiguaration>(new MicrocontrollerPinConfiguaration());

  // microcontroller
  updateMicrocontroller(avrMicrocontroller: AvrMicrocontroller): void {
    this._microcontrollerSelected$.next(avrMicrocontroller);
  }

  getMicrocontrollerSelected(): Observable<AvrMicrocontroller> {
    return this._microcontrollerSelected$.asObservable().pipe(share());
  }

  getMicrocontrollerSelectedSync(): AvrMicrocontroller {
    return this._microcontrollerSelected$.getValue();
  }

   // microcontroller package
  updateMicrocontrollerPinConfiguration(microcontrollerPinConfiguration: MicrocontrollerPinConfiguaration): void {
    this._microcontrollerPinConfiguration$.next(microcontrollerPinConfiguration);
  }

  getMicrocontrollerPinConfiguration(): Observable<MicrocontrollerPinConfiguaration> {
    return this._microcontrollerPinConfiguration$.asObservable().pipe(share());
  }

  getMicrocontrollerPinConfigurationSync(): MicrocontrollerPinConfiguaration {
    return this._microcontrollerPinConfiguration$.getValue();
  }

}
