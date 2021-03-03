import { PinLabelsEnum, PinPortsEnum, PinTypesEnum } from "../shared/enums";

export interface MicrocontrollerPin {
    number: number;
    pinLabels: PinLabelsEnum [];
    pinType: PinTypesEnum;
    pinPort?: PinPortsEnum;
    pinDisabled?: boolean;
    pinColor?: string;
}
