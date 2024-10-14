import {Base} from "./base-model";
import {Course} from "./course";
import {Student} from "./student";

export class Feedback extends Base {
    studentId?: string; // Converted Guid? to string
    courseId?: string; // Converted Guid? to string
    description?: string;
    rating?: number;
    student?: Student; // Assuming Student is the modified name from StudentResult
    course?: Course; // Assuming Course is the modified name from CourseResult
}
