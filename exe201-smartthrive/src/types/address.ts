import {BaseEntity} from "./base";
import {Provider} from "./provider";

export interface Address extends BaseEntity {
    providerId?: string;
    city?: string;
    district?: string;
    town?: string;
    street?: string;
    buildingNumber?: string;
    provider?: Provider;
}
