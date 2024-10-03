import { axiosGet } from "./baseService";

export const getPackageXCourseByPackageId = async (packageId: string) => await axiosGet("/packagexcourses", {params: {
    PackageId: packageId,  
    IsPagination: true, 
  },});

