import {axiosGet} from "./base-service";

class SubjectAPI {
  getByCategoryId = async (id: string) => {
    return await axiosGet(`/subjects?CategoryId=${id}&IsPagination=true`, {});
  };
  getAll = async () => {
    return await axiosGet(`/subjects`, {});
  };
}
const SubjectService = new SubjectAPI();
export default SubjectService;
