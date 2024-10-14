import {Base} from "./BaseModel";
import {Course} from "./Course";
import {Package} from "./Package";

export class PackageXCourse extends Base {
    courseId?: string; // Converted Guid? to string
    packageId?: string; // Converted Guid? to string
    course?: Course; // Assuming Course is the modified name from CourseResult
    package?: Package; // Assuming Package is the modified name from PackageResult
}
