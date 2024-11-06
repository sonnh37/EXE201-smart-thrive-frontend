import {axiosGet} from "./base-service";

class CategoryAPI {
    getAll = async () => {
        return await axiosGet("/categories?IsPagination=true", {});
    };
}

const CategoryService = new CategoryAPI();
export default CategoryService;
