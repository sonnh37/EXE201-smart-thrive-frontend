import {axiosGet, axiosPost} from "./baseService";

class PackageAPI {
    getAll = async () => {
        return await axiosGet("/packages", {});
    };

    getById = async (id: string) => {
        return await axiosGet(`/packages/${id}`, {});
    };

    create = async (
        studentId: string,
        name: string,
        quantityCourse: number,
        totalPrice: number
    ) => {
        return await axiosPost(
            `/packages/createWithStudent`,
            {
                studentId,
                name,
                quantityCourse,
                totalPrice,
                isActive: true,
                status: 0,
            },
            {}
        );
    };
}

const PackageService = new PackageAPI();
export default PackageService;
