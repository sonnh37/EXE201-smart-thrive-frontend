import {Base} from "./base-model";
import {Blog} from "./blog";
import {Gender, Role, UserStatus} from "./enum";
import {Provider} from "./provider";
import {Student} from "./student";

export class User extends Base {
    username?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    imageUrl?: string;
    email?: string;
    dob?: Date;
    address?: string;
    gender?: Gender;
    phone?: string;
    status?: UserStatus;
    role?: Role;
    blogs?: Blog[];
    provider?: Provider;
    students?: Student[];
}
