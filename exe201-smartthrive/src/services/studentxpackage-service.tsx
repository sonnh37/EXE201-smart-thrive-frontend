import {axiosGet} from "./baseService";

export const getStudentXPackage = async (studentId: string) => await axiosGet("/studentxpackages", {
    params: {
        StudentId: studentId,  // Truyền studentId vào UserId
        IsPagination: true, // Truyền IsPagination = true
    },
});
// export const getStudentXPackageByStudentId = async () => {
//   return await axiosGet(`/studentxpackages`, {});
// };