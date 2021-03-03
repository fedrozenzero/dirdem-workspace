import { CommunicationInterfaceNamesEnum, CommunicationInterfaceTypesEnum } from "../shared/enums";


export interface CommunicationInterface {
    name: CommunicationInterfaceNamesEnum;
    type: CommunicationInterfaceTypesEnum;
}
