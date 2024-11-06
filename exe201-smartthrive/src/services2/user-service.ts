import {User} from "@/types/user";
import {BusinessResult} from "@/types/response/business-result";
import {LoginResponse} from "@/types/response/login-response";
import {Const} from "@/lib/const";
import BaseService from "./base-service";
import axiosInstance from "@/lib/axios-instance";

class UserService extends BaseService<User> {
    constructor() {
        super(Const.API_USER);
    }

    public login = async (username: string, password: string): Promise<BusinessResult<LoginResponse>> => {
        try {
            const response = await axiosInstance.post<BusinessResult<LoginResponse>>(
                `${Const.API_USER}/login`,
                {usernameOrEmail: username, password: password}
            );
            return response.data;
        } catch (error) {
            return this.handleError(error);
        }
    }

    public loginByGoogle = async (token: string): Promise<BusinessResult<LoginResponse>> => {
        try {
            const response = await axiosInstance.post<BusinessResult<LoginResponse>>(
                `${Const.API_USER}/login-by-google`,
                {token: token}
            );
            return response.data;
        } catch (error) {
            this.handleError(error);
            return Promise.reject(error);
        }
    }

    public fetchUserByUsernameOrEmail = async (keyword: string): Promise<BusinessResult<User>> => {
        try {
            const response = await axiosInstance.get<BusinessResult<User>>(
                `${Const.API_USER}/username-or-email`,
                {params: {key: keyword}}
            );
            return response.data;
        } catch (error) {
            this.handleError(error);
            return Promise.reject(error);
        }
    }

    public fetchUserByUsername = async (username: string): Promise<BusinessResult<User>> => {
        try {
            const response = await axiosInstance.get<BusinessResult<User>>(
                `${Const.API_USER}/${username}`
            );
            return response.data;
        } catch (error) {
            this.handleError(error);
            return Promise.reject(error);
        }
    }

    public findAccountRegisteredByGoogle = async (token: string): Promise<BusinessResult<null>> => {
        try {
            const response = await axiosInstance.post<BusinessResult<null>>(
                `${Const.API_USER}/find-account-registered-by-google`,
                {token: token}
            );
            return response.data;
        } catch (error) {
            this.handleError(error);
            return Promise.reject(error);
        }
    }

    public registerByGoogle = async (token: string, password: string): Promise<BusinessResult<LoginResponse>> => {
        try {
            const response = await axiosInstance.post<BusinessResult<LoginResponse>>(
                `${Const.API_USER}/register-by-google`,
                {token: token, password: password}
            );
            return response.data;
        } catch (error) {
            this.handleError(error);
            return Promise.reject(error);
        }
    }

    public register = async (user: User): Promise<BusinessResult<LoginResponse>> => {
        try {
            const response = await axiosInstance.post<BusinessResult<LoginResponse>>(
                `${Const.API_USER}/register`,
                user
            );
            return response.data;
        } catch (error) {
            this.handleError(error);
            return Promise.reject(error);
        }
    }

    public decodeToken = async (token: string): Promise<BusinessResult<DecodedToken>> => {
        try {
            const response = await axiosInstance.post<BusinessResult<DecodedToken>>(
                `${Const.API_USER}/decode-token`,
                {token: token}
            );
            return response.data;
        } catch (error) {
            this.handleError(error);
            return Promise.reject(error);
        }
    }
}

export default new UserService();
