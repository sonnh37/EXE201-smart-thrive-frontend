import {BaseQueryableQuery} from "./base-query";

export interface UserGetAllQuery extends BaseQueryableQuery {
    username?: string;
    password?: string;
}
