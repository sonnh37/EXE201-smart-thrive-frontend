import {toast} from "sonner";
import {baseUrl} from "./baseService";
import axiosInstance from "./loginbygoogle";

const handleError = (error: any) => {
    console.error("API User Error:", error);
    throw error;
}
export const loginByGoogle = (
    token: string
): Promise<any> => {
    return axiosInstance
        .post<any>(`${baseUrl}/users/login-by-google`, {
            token: token,
        })
        .then((response) => response.data)
        .catch(handleError);
};


export const loginAuthByGoogle = (
    response: any
): boolean => {
    try {

        if (response.status == 1) {
            const token = response.data?.token;
            toast.success(response.message);
            // Lưu JWT vào cookie với thuộc tính bảo mật
            localStorage.setItem("token", token!);

            return true;
        } else {
            toast.error(response.message);
            return false;
        }
    } catch (error) {
        toast.error("Error during login: " + error);
        return false;
    }
};
