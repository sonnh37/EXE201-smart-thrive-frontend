import {Base} from "./base-model";
import {VoucherStatus, VoucherType} from "./enum";
import {Order} from "./order";

export class Voucher extends Base {
    voucherType?: VoucherType; // Assuming VoucherType is defined in your enums
    name?: string;
    code?: string;
    value?: number;
    condition?: number;
    status?: VoucherStatus; // Assuming VoucherStatus is defined in your enums
    order?: Order; // Assuming Order is the modified name from OrderResult
}
