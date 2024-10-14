import {Base} from "./base-model";
import {User} from "./user";

export class Blog extends Base {
    userId?: string;
    title?: string;
    description?: string;
    isActive: boolean = false;
    backgroundImage?: string;
    user?: User;
}
