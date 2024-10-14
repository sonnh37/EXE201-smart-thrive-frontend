import {Base} from "./BaseModel";
import {VoucherStatus, VoucherType} from "./Enum";
import {Order} from "./Order";

export class Voucher extends Base {
    voucherType?: VoucherType; // Assuming VoucherType is defined in your enums
    name?: string;
    code?: string;
    value?: number;
    condition?: number;
    status?: VoucherStatus; // Assuming VoucherStatus is defined in your enums
    order?: Order; // Assuming Order is the modified name from OrderResult
}
