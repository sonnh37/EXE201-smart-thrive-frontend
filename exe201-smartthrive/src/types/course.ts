import Module from "module";
import {BaseEntity} from "./base";
import {Feedback} from "./feedback";
import {Subject} from "./subject";
import {Provider} from "./provider";
import {PackageXCourse} from "./package-x-course";
import {CourseStatus, CourseType, DayInWeek} from "./enums/course";

export interface Course extends BaseEntity {
    subjectId?: string;
    providerId?: string;
    teacherName?: string;
    type?: CourseType;
    name?: string;
    code?: string;
    description?: string;
    backgroundImage?: string;
    price?: number;
    soldCourses?: number;
    totalSlots?: number;
    totalSessions?: number;
    startTime?: string;
    endTime?: string;
    status?: CourseStatus;
    isActive: boolean;
    startDate?: Date;
    endDate?: Date;
    dayInWeek?: DayInWeek;
    subject?: Subject;
    provider?: Provider;
    modules?: Module[];
    feedbacks?: Feedback[];
    packageXCourses?: PackageXCourse[];
}
