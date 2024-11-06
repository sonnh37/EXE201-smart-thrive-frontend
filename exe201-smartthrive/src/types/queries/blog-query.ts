import {BaseQueryableQuery} from "./base-query";

export interface BlogGetAllQuery extends BaseQueryableQuery {
    userId?: string;
    title?: string;
    description?: string;
    isActive?: boolean;
    backgroundImage?: string;
}
