import {BaseEntity} from './base';
import {OrderStatus, PaymentMethod} from './enums/order';
import {Package} from './package';
import {Voucher} from './voucher';


export interface Order extends BaseEntity {
    packageId?: string;
    voucherId?: string;
    paymentMethod?: PaymentMethod;
    totalPrice?: number;
    description?: string;
    status?: OrderStatus;
    package?: Package;
    voucher?: Voucher;
}
