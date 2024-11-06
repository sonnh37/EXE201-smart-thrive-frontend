import {Const} from "@/lib/const";
import {Subject} from "@/types/subject";
import BaseService from "./base-service";

class SubjectService extends BaseService<Subject> {
    constructor() {
        super(Const.API_SUBJECT);
    }
}

export default new SubjectService();