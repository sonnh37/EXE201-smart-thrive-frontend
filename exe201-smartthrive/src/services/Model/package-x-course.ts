import {Base} from "./base-model";
import {Course} from "./course";
import {Package} from "./package";

export class PackageXCourse extends Base {
    courseId?: string; // Converted Guid? to string
    packageId?: string; // Converted Guid? to string
    course?: Course; // Assuming Course is the modified name from CourseResult
    package?: Package; // Assuming Package is the modified name from PackageResult
}
