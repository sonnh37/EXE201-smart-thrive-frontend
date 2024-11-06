import {Provider} from "./provider";
import {BaseEntity} from "./base";
import {Student} from "./student";
import {Blog} from "./blog";


export enum Gender {
    Male = 'Male',
    Female = 'Female',
    Other = 'Other',
}

export enum UserStatus {
    Active = 'Active',
    Inactive = 'Inactive',
    Suspended = 'Suspended',
}

export enum Role {
    Admin = 'Admin',
    User = 'User',
    Provider = 'Provider',
}

export interface User extends BaseEntity {
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
