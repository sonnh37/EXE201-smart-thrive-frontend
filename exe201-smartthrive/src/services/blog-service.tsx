import {axiosGet} from "./baseService";

export const getBlog = async () => await axiosGet("/blogs", {});
export const getBlogById = async (id: string) => {
    return await axiosGet(`/blogs/${id}`, {});
};
