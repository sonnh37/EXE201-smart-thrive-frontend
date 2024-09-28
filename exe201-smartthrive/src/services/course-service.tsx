import { axiosGet } from "./baseService";

class CourseAPI {
  getAll = async () => {
    return await axiosGet("/courses", {});
  };

  getById = async (id: string) => {
    return await axiosGet(`/courses/${id}`, {});
  };
}
const CourseService = new CourseAPI();
export default CourseService;
