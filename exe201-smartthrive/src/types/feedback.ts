import {BaseEntity} from "./base";
import {Course} from "./course";
import {Student} from "./student";

export interface Feedback extends BaseEntity {
    studentId?: string;
    courseId?: string;
    description?: string;
    rating?: number;
    student?: Student;
    course?: Course;
}
