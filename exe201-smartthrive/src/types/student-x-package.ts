import {BaseEntity} from "./base";
import {Package} from "./package";
import {Student} from "./student";

export interface StudentXPackage extends BaseEntity {
    studentId?: string;
    packageId?: string;
    student?: Student;
    package?: Package;
}
