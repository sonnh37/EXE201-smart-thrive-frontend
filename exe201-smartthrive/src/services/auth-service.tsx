import { axiosPost } from "./baseService";

class AuthAPI {
  login = (userName: string, password: string) => {
    return axiosPost(
      "/users/login",
      { email: userName, password: password },
      {}
    );
  };
}

const AuthService = new AuthAPI();

export default AuthService;
