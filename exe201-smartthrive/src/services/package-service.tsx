import { axiosGet, axiosPost } from "./baseService";

class PackageAPI {
  getAll = async () => {
    return await axiosGet("/packages", {});
  };

  getById = async (id: string) => {
    return await axiosGet(`/packages/${id}`, {});
  };

  // create = async (name: string, quantityCourse ) => {
  //   return await axiosPost(`/packages`, data, {});
  // };
}

const PackageService = new PackageAPI();
export default PackageService;
