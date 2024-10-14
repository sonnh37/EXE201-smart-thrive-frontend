import {Base} from "./base-model";
import {Course} from "./course";
import {Session} from "./session";

export class Module extends Base {
    courseId?: string; // Converted Guid? to string
    moduleNumber?: number;
    name?: string;
    description?: string;
    course?: Course; // Assuming Course is the modified name from CourseResult
    sessions?: Session[]; // Assuming Session is the modified name from SessionResult
}
