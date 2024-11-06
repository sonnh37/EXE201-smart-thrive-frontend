import {Address} from "cluster";
import {User} from "./user";
import {BaseEntity} from "./base";
import {Course} from "./course";

export interface Provider extends BaseEntity {
    userId?: string;
    companyName?: string;
    website?: string;
    user?: User;
    courses?: Course[];
    addresses?: Address[];
}
