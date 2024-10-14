import {Base} from "./base-model";
import {Course} from "./course";

export class DayInWeek extends Base {
    courseId?: string;
    monday: boolean = false;
    thursday: boolean = false;
    tuesday: boolean = false;
    wednesday: boolean = false;
    friday: boolean = false;
    saturday: boolean = false;
    sunday: boolean = false;
    course?: Course;
}
