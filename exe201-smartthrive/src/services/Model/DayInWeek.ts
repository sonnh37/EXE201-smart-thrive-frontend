import {Base} from "./BaseModel";
import {Course} from "./Course";

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
