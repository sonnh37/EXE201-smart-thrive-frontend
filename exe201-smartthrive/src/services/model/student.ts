import {Base} from "./base-model";
import {Gender, UserStatus} from "./enum";
import {Feedback} from "./feedback";
import {StudentXPackage} from "./student-x-package";
import {User} from "./user";

export class Student extends Base {
    userId?: string;
    studentName?: string;
    firstName?: string;
    lastName?: string;
    imageAvatar?: string;
    gender?: Gender;
    dob?: Date;
    phone?: string;
    status?: UserStatus;
    user?: User;
    feedback?: Feedback;
    studentXPackages?: StudentXPackage[];
}
