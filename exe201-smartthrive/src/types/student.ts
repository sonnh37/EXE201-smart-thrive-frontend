import {BaseEntity} from "./base";
import {Feedback} from "./feedback";
import {StudentXPackage} from "./student-x-package";
import {User} from "./user";

export enum Gender {
    Male = 1,
    Female = 2,
    Other = 3,
}

export enum UserStatus {
    Active = 1,
    Inactive = 2,
    Suspended = 3,
}

export interface Student extends BaseEntity {
    userId?: string;
    studentName?: string;
    gender?: Gender;
    dob?: Date;
    status?: UserStatus;
    user?: User;
    feedback?: Feedback;
    studentXPackages?: StudentXPackage[];
}
