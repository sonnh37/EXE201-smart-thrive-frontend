import {Const} from "@/lib/const";
import {Course} from "@/types/course";
import BaseService from "./base-service";

class CourseService extends BaseService<Course> {
    constructor() {
        super(Const.API_COURSE);
    }
}

export default new CourseService();