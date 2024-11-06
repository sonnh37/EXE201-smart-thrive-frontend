import {BaseEntity} from "./base";
import {Course} from "./course";
import {Package} from "./package";

export interface PackageXCourse extends BaseEntity {
    courseId?: string;
    packageId?: string;
    course?: Course;
    package?: Package;
}