import {BaseEntity} from "./base";
import {Order} from "./order";

export enum VoucherType {
    Discount = 1,
    Cashback = 2,
    FreeShipping = 3,
}

export enum VoucherStatus {
    Active = 1,
    Inactive = 2,
    Expired = 3,
}

export interface Voucher extends BaseEntity {
    voucherType?: VoucherType;
    name?: string;
    code?: string;
    value?: number;
    condition?: number;
    status?: VoucherStatus;
    orders?: Order[];
}
