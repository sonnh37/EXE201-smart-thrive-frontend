import { axiosPost } from "./base-service";

class PackageXCourseAPI {
  create = async (packageId: string, courseId: string) => {
    return axiosPost("/packagexcourses", { courseId, packageId }, {});
  };
}

const PackageXCourseService = new PackageXCourseAPI();

export default PackageXCourseService;
