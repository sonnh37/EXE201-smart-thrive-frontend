import { Gender } from "./Model/Enum";
import { Student } from "./Model/Student";
import { axiosGet,axiosPost } from "./baseService";


class StudentAPI {
  getByUserId = async (id: string) => {
    return await axiosGet(`/students?UserId=${id}&IsPagination=true`, {});
  };

  
  createStudent = async (student: Student ) => {
    const imageAvatar = student.imageAvatar || "img1"; // Gán giá trị mặc định nếu imageAvatar không có giá trị
    return axiosPost("/students", { userId:student.userId = localStorage.getItem("userId")?.toString(),
     studentName: student.studentName,
     firstName: student.firstName,
     lastName: student.lastName,
     gender:  student.gender,
     dob:   student.dob,
     status:   student.status =0,
     imageAvatar: imageAvatar
    }, {});
  };
}


const StudentService = new StudentAPI();
export default StudentService;
