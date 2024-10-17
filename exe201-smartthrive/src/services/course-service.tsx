import { axiosGet } from "./base-service";

class CourseAPI {
  getAll = async () => {
    return await axiosGet("/courses", {});
  };

  getById = async (id: string) => {
    return await axiosGet(`/courses/${id}`, {});
  };
  getBySubjectId = async (id: string) => {
    return await axiosGet(
      `/courses?SubjectId=${id}&ticks=0&IsPagination=true`,
      {}
    );
  };
}

const CourseService = new CourseAPI();
export default CourseService;
