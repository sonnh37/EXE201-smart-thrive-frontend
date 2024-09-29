/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
export const baseUrl = process.env.NEXT_PUBLIC_BASE_DOMAIN;
export const axiosGet = async (path: string, config: any) =>
  (await axios.get(baseUrl + path, config)).data.data;

export const axiosPost = async (path: string, data: any, config: any) =>
  await axios.post(baseUrl + path, data, config);

export const axiosDelete = (path: string, config: any) =>
  axios.delete(baseUrl + path, config);
