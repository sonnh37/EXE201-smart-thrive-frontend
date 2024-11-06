import {Const} from "@/lib/const";
import {Package} from "@/types/package";
import BaseService from "./base-service";
import { PackageXCourse } from "@/types/package-x-course";

class PackageXCourseService extends BaseService<PackageXCourse> {
    constructor() {
        super(Const.API_PACKAGE_X_COURSE);
    }
}

export default new PackageXCourseService();