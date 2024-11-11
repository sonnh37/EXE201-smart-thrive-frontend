import { axiosDelete, axiosPost } from "./base-service";

class PackageXCourseAPI {
  create = async (packageId: string, courseId: string) => {
    return axiosPost("/packagexcourses", { courseId, packageId }, {});
  };
  delete = async (id: string) => {
    return axiosDelete("/packagexcourses/" + id, {});
  };
}

const PackageXCourseService = new PackageXCourseAPI();

export default PackageXCourseService;
