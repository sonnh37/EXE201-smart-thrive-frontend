import {Base} from "./base-model";
import {Course} from "./course";
import {User} from "./user";

export class Provider extends Base {
    userId?: string;
    companyName?: string;
    address?: string;
    website?: string;
    user?: User;
    courses?: Course[];
}
