import userService from "@/services2/user-service";
import {BusinessResult} from "@/types/response/business-result";
import {LoginResponse} from "@/types/response/login-response";
import {User} from "@/types/user";
import {toast} from "sonner";
// utils/auth.ts
export const loginAuth = async (
    username: string,
    password: string
): Promise<boolean> => {
    const response = await userService.login(username, password);

    if (response.status != 1) {
        toast.error(response.message);
    }

    return setLocalStorage(response);
};

export const setLocalStorage = (
    response: BusinessResult<LoginResponse>
): boolean => {
    try {
        if (response.status == 1) {
            const token = response.data?.token;
            toast.success(response.message);
            // Lưu JWT vào cookie với thuộc tính bảo mật
            localStorage.setItem("token", token!);
            document.cookie = `token=${token}; path=/; secure; samesite=strict;`;
            userService
                .decodeToken(token!)
                .then((response) => {
                    // Kiểm tra nếu token hợp lệ
                    if (response.status !== 1) {
                        toast.error(response.message);
                        throw new Error(response.message);
                    }
                    const decodedToken = response.data;
                    localStorage.setItem("role", decodedToken!.role);
                    // Fetch thông tin người dùng
                    return userService.fetchById(decodedToken!.id);
                })
                .then((response_user) => {
                    // Kiểm tra nếu thông tin người dùng được trả về
                    if (response_user.status !== 1) {
                        toast.error(response_user.message);
                        throw new Error("Không tìm thấy người dùng");
                    }
                    localStorage.setItem("user", JSON.stringify(response_user.data));
                })
                .catch((error) => {
                    toast.error(error.message);
                    return false;
                });

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

export const logout = () => {
    // Xóa token khỏi localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("role");
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    // window.location.reload();
};

export const getTokenFromCookie = (): string | null => {
    const name = "token=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
};

export const getUserByToken = async (): Promise<User> => {
    const token: string | null = getTokenFromCookie(); // Đảm bảo token có kiểu string | null
    const response = await userService.decodeToken(token ?? "");
    // id user
    const id = response.data?.id;

    const _response = await userService.fetchById(id!);
    return _response.data!;
};

export const IsValidToken = async (token: string): Promise<boolean> => {
    let isTokenValid = true;
    if (token) {
        try {
            const response = await userService.decodeToken(token);
            const decoded = response.data;

            const currentTime = Date.now() / 1000; // Thời gian hiện tại tính bằng giây

            // Kiểm tra xem token đã hết hạn chưa
            if (decoded!.exp < currentTime) {
                isTokenValid = false;
            } else {
                isTokenValid = true;
            }
        } catch (error) {
            isTokenValid = false; // Nếu decode token bị lỗi, coi như token không hợp lệ
        }
    } else {
        isTokenValid = false;
    }

    return isTokenValid;
};
