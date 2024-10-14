import {Student} from "./model/student";
import {axiosDelete, axiosGet, axiosPost, axiosPut} from "./base-service";


class StudentAPI {
    getByUserId = async (id: string) => {
        return await axiosGet(`/students?UserId=${id}&IsPagination=true`, {});
    };


    createStudent = async (student: Student) => {
        const imageAvatar = student.imageAvatar || "img1"; // Gán giá trị mặc định nếu imageAvatar không có giá trị
        return axiosPost("/students", {
            userId: student.userId = localStorage.getItem("userId")?.toString(),
            studentName: student.studentName,
            firstName: student.firstName,
            lastName: student.lastName,
            gender: student.gender,
            dob: student.dob,
            status: student.status = 0,
            imageAvatar: imageAvatar
        }, {});
    };

    updateStudent = async (student: Student) => {
        return axiosPut("/students", {
                userId: student.userId = localStorage.getItem("userId")?.toString(),
                studentName: student.studentName,
                firstName: student.firstName,
                lastName: student.lastName,
                gender: student.gender,
                dob: student.dob,
                status: student.status = 0,
                imageAvatar: student.imageAvatar
            }, {}
        );
    }

    deleteStudent = async (id: string) => {
        return await axiosDelete(`/students/${id}`, {});
    };

}


const StudentService = new StudentAPI();
export default StudentService;
