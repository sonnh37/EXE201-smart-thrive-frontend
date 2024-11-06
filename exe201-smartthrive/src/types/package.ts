import {BaseEntity} from "./base";
import {PackageStatus} from "./enums/package";
import {Order} from "./order";
import {PackageXCourse} from "./package-x-course";
import {StudentXPackage} from "./student-x-package";

export interface Package extends BaseEntity {
    name?: string;
    quantityCourse?: number;
    totalPrice?: number;
    isActive?: boolean;
    status?: PackageStatus;
    packageXCourses?: PackageXCourse[];
    orders?: Order[];
    studentXPackages?: StudentXPackage[];
}
