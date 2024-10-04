import { User } from "./Model/User";
import { axiosGet, axiosPost } from "./baseService";

class AuthAPI {
  login = (userName: string, password: string) => {
    return axiosPost(
      "/users/login",
      { email: userName, password: password },
      {}
    );
  };

  getById = async (id: string) => {
    return await axiosGet(`/users/${id}`, {});
  };

  register = async (user: User) => {
    return axiosPost("/users/register", {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      username: user.username,
      password: user.password,
      status: user.status = 0,
      role: user.role = 3
    }, {});
  };
}




const AuthService = new AuthAPI();

export default AuthService;
