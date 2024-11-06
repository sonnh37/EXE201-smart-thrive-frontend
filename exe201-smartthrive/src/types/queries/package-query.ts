import {PackageStatus} from "../enums/package";
import {BaseQueryableQuery} from "./base-query";

export interface PackageGetAllQuery extends BaseQueryableQuery {
    name?: string;
    quantityCourse?: number;
    totalPrice?: number;
    isActive?: boolean;
    status?: PackageStatus;
}
