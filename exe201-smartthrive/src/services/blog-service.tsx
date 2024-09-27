import { axiosGet, baseUrl } from "./baseService";

export const getBlog = async () => await axiosGet("/blogs", {});
