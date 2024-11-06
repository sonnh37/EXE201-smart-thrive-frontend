import {OrderStatus, PaymentMethod} from "../enums/order";
import {BaseQueryableQuery} from "./base-query";

export interface OrderGetAllQuery extends BaseQueryableQuery {
    packageId?: string;
    voucherId?: string;
    paymentMethod?: PaymentMethod;
    totalPrice?: number;
    description?: string;
    status?: OrderStatus;
}
