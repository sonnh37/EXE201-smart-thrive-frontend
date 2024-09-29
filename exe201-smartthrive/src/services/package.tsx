import { axiosGet, axiosPost } from "./baseService";
import { Package } from "./Model/Package";

class PackageAPI {
  getAll = async () => {
    return await axiosGet("/packages", {});
  };

  getById = async (id: string) => {
    return await axiosGet(`/packages/${id}`, {});
  };

  create = async (data: Package) => {
    return await axiosPost(`/packages`, data, {});
  };
}

const PackageService = new PackageAPI();
export default PackageService;
