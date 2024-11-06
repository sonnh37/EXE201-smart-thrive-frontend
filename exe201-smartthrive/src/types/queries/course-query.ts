import {CourseStatus, CourseType} from "../enums/course";
import {BaseQueryableQuery} from "./base-query";

export interface CourseGetAllQuery extends BaseQueryableQuery {
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

    packageId?: string;
}