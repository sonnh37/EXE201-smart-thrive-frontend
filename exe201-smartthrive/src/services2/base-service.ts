import axiosInstance from "@/lib/axios-instance";
import {cleanQueryParams} from "@/lib/utils";
import {CreateCommand, UpdateCommand} from "@/types/commands/base-command";
import {BaseQueryableQuery} from "@/types/queries/base-query";
import {BusinessResult} from "@/types/response/business-result";

class BaseService<T> {
    private endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    public fetchAll = (query?: BaseQueryableQuery): Promise<BusinessResult<PagedResponse<T>>> => {
        if (query == null) {
            query = {
                isPagination: false,
            }
        }
        const cleanedQuery = cleanQueryParams(query!);
        return axiosInstance
            .get<BusinessResult<PagedResponse<T>>>(`${this.endpoint}?${cleanedQuery}`)
            .then(response => {
                return response.data; // Đảm bảo rằng nó trả về dữ liệu
            })
            .catch(error => {
                return this.handleError(error); // Xử lý lỗi
            });
    }

    public fetchById = (id: string): Promise<BusinessResult<T>> => {
        return axiosInstance
            .get<BusinessResult<T>>(`${this.endpoint}/${id}`)
            .then(response => response.data)
            .catch(error => this.handleError(error)); // Xử lý lỗi
    }

    public create = (command: CreateCommand): Promise<BusinessResult<T>> => {
        return axiosInstance
            .post<BusinessResult<T>>(this.endpoint, command)
            .then(response => response.data)
            .catch(error => this.handleError(error)); // Xử lý lỗi
    }

    public update = (command: UpdateCommand): Promise<BusinessResult<T>> => {
        return axiosInstance
            .put<BusinessResult<T>>(this.endpoint, command)
            .then(response => response.data)
            .catch(error => this.handleError(error)); // Xử lý lỗi
    }

    public delete = (id: string): Promise<BusinessResult<null>> => {
        return axiosInstance
            .delete<BusinessResult<null>>(`${this.endpoint}/${id}`)
            .then(response => response.data)
            .catch(error => this.handleError(error)); // Xử lý lỗi
    }

    protected handleError(error: any) {
        console.error(`${this.endpoint} API Error:`, error);
        return Promise.reject(error);
    }
}

export default BaseService;
