import {Base} from "./BaseModel";
import {Package} from "./Package";
import {Student} from "./Student";

export class StudentXPackage extends Base {
    studentId?: string; // Converted Guid? to string
    packageId?: string; // Converted Guid? to string
    student?: Student; // Assuming Student is the modified name from StudentResult
    package?: Package; // Assuming Package is the modified name from PackageResult
}
