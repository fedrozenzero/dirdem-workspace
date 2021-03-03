import { MicrocontrollerTimerFeaturesNameEnum, MicrocontrollerTimerFeaturesDescriptionEnum } from "../shared/enums";

export interface MicrocontrollerTimerFeature {
  microcontrollerTimerFeaturesName: MicrocontrollerTimerFeaturesNameEnum;
  microcontrollerTimerFeaturesDescription?: MicrocontrollerTimerFeaturesDescriptionEnum [];
}
