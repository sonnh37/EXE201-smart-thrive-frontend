import {axiosGet} from "./base-service";

class PackageXStudentAPI {
    getByStudentId = async (studentId: string) => {
        return await axiosGet(
            `/studentxpackages?StudentId=${studentId}&IsPagination=true`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            }
        );
    };
}

const PackageXStudentService = new PackageXStudentAPI();

export default PackageXStudentService;
