import {BaseEntity} from "./base";
import {Subject} from "./subject";

export interface Category extends BaseEntity {
    name?: string;
    subjects?: Subject[];
}
