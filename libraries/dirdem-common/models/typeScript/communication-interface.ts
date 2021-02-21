import { CommunicationInterfaceNamesEnum, CommunicationInterfaceTypesEnum } from "libraries/dirdem-common/shared/enums";

export interface CommunicationInterface {
    name: CommunicationInterfaceNamesEnum;
    type: CommunicationInterfaceTypesEnum;
}
