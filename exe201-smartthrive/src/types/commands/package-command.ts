import {PackageStatus} from "@/types/enums/package";
import {CreateCommand, UpdateCommand} from "@/types/commands/base-command";

export interface PackageCreateCommand extends CreateCommand {
    name?: string;
    quantityCourse?: number;
    totalPrice?: number;
    isActive?: boolean;
    status?: PackageStatus;
}

export interface PackageUpdateCommand extends UpdateCommand {
    name?: string;
    quantityCourse?: number;
    totalPrice?: number;
    isActive?: boolean;
    status?: PackageStatus;
    packageXCourses: PackageXCourseUpdateCommand[];
}

export interface PackageXCourseUpdateCommand extends UpdateCommand {
    courseId?: string;
    packageId?: string;
}


export interface PackageXCourseCreateCommand extends CreateCommand {
    courseId?: string;
    packageId?: string;
}
