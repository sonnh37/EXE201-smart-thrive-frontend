import { axiosGet } from "./baseService";

class PackageXStudentAPI {
  getByStudentId = async (studentId: string) => {
    return await axiosGet(
      `/studentxpackages?StudentId=${studentId}&IsPagination=true`,
      {}
    );
  };
}

const PackageXStudentService = new PackageXStudentAPI();

export default PackageXStudentService;