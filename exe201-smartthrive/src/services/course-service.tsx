import { axiosGet } from "./base-service";

class CourseAPI {
  getAll = async () => {
    return await axiosGet(
      "/courses?ticks=0&IsActive=true&IsPagination=true&PageNumber=1&PageSize=9",
      {}
    );
  };

  getById = async (id: string) => {
    return await axiosGet(
      `/courses/${id}?IsActive=true&IsPagination=true&PageNumber=1&PageSize=9`,
      {}
    );
  };
  getBySubjectId = async (id: string) => {
    return await axiosGet(
      `/courses?SubjectId=${id}&IsPagination=true&IsActive=true&IsPagination=true&PageNumber=1&PageSize=9`,
      {}
    );
  };
}

const CourseService = new CourseAPI();
export default CourseService;
