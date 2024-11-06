import axiosInstance from "@/lib/axios-instance";

export const baseUrl = process.env.NEXT_PUBLIC_BASE_DOMAIN;
export const axiosGet = async (path: string, config: any) =>
    (await axiosInstance.get(baseUrl + path, config)).data.data;

export const axiosPost = async (path: string, data: any, config: any) =>
    await axiosInstance.post(baseUrl + path, data, config);

export const axiosDelete = (path: string, config: any) =>
    axiosInstance.delete(baseUrl + path, config);

export const axiosPut = async (path: string, data: any, config: any) =>
    await axiosInstance.put(baseUrl + path, data, config);
