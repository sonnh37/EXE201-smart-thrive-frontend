import { axiosGet } from "./baseService";

class StudentAPI {
  getByUserId = async (id: string) => {
    return await axiosGet(`/students?UserId=${id}&IsPagination=true`, {});
  };
}

const StudentService = new StudentAPI();
export default StudentService;
