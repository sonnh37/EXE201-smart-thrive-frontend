import {CourseStatus, CourseType} from "../enums/course";
import {CreateCommand, UpdateCommand} from "./base-command";

export interface CourseCreateCommand extends CreateCommand {
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
    startTime?: string;
    endTime?: string;
    status?: CourseStatus;
    isActive?: boolean;
    startDate?: string;
    endDate?: string;
}

export interface CourseUpdateCommand extends UpdateCommand {
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
    startTime?: string;
    endTime?: string;
    status?: CourseStatus;
    isActive?: boolean;
    startDate?: string;
    endDate?: string;
}
