import {axiosGet, axiosPost} from "./base-service";
import {User} from "./model/user";

class AuthAPI {
    login = (userName: string, password: string) => {
        return axiosPost(
            "/users/login",
            {usernameOrEmail: userName, password: password},
            {}
        );
    };

    decodeToken = (token: string) => {
        return axiosPost(
            "/users/decode-token",
            {token},
            {headers: {Authorization: `Bearer ${token}`}}
        );
    };

    getById = async (id: string) => {
        return await axiosGet(`/users/${id}`, {
            headers: {Authorization: `Bearer ${localStorage.getItem("userId")}`},
        });
    };

    register = async (user: User) => {
        return axiosPost(
            "/users/register",
            {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                phone: user.phone,
                username: user.username,
                password: user.password,
                status: (user.status = 0),
                role: (user.role = 3),
            },
            {}
        );
    };
}

const AuthService = new AuthAPI();

export default AuthService;
