import {Base} from "./base-model";
import {DayInWeek} from "./day-in-week";
import {CourseStatus, CourseType} from "./enum";
import {Feedback} from "./feedback";
import {Module} from "./module";
import {PackageXCourse} from "./package-x-course";
import {Provider} from "./provider";
import {Subject} from "./subject";

export class Course extends Base {
    subjectId?: string;
    providerId?: string;
    teacherName?: string;
    type?: CourseType;
    name?: string;
    code?: string;
    courseName?: string;
    description?: string;
    backgroundImage?: string;
    price?: number;
    soldCourses?: number;
    totalSlots?: number;
    totalSessions?: number;
    startTime?: string; // TimeSpan is converted to string in TypeScript
    endTime?: string; // TimeSpan is converted to string in TypeScript
    status?: CourseStatus;
    isActive: boolean = false;
    startDate?: Date;
    endDate?: Date;
    dayInWeek?: DayInWeek;
    subject?: Subject;
    provider?: Provider;
    modules?: Module[];
    feedbacks?: Feedback[];
    packageXCourses?: PackageXCourse[];
}
