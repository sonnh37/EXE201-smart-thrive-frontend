import {BaseEntity} from "./base";
import {Course} from "./course";
import {Session} from "./session";

export interface Module extends BaseEntity {
    courseId?: string;
    moduleNumber?: number;
    name?: string;
    description?: string;
    course?: Course;
    sessions?: Session[];
}
