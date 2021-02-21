import { MicrocontrollerTimerFeaturesDescriptionEnum, MicrocontrollerTimerFeaturesNameEnum } from "libraries/dirdem-common/shared/enums";

export interface MicrocontrollerTimerFeature {
  microcontrollerTimerFeaturesName: MicrocontrollerTimerFeaturesNameEnum;
  microcontrollerTimerFeaturesDescription?: MicrocontrollerTimerFeaturesDescriptionEnum [];
}
