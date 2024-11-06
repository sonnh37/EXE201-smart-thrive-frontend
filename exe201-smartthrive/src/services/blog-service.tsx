import {axiosGet} from "./base-service";

export const getBlog = async () => await axiosGet("/blogs", {});
export const getBlogById = async (id: string) => {
  return await axiosGet(`/blogs/${id}`, {});
};
export const get3NewestBlog = async () =>
  await axiosGet(
    "/blogs?IsPagination=true&PageNumber=1&PageSize=3&SortField=createdDate&SortOrder=1",
    {}
  );
