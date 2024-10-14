import {Base} from "./base-model";
import {OrderStatus, PaymentMethod} from "./enum";
import {Package} from "./package";
import {Voucher} from "./voucher";

export class Order extends Base {
    packageId?: string; // Converted Guid? to string
    voucherId?: string; // Converted Guid? to string
    paymentMethod?: PaymentMethod; // Assuming PaymentMethod is defined in your enums
    totalPrice?: number;
    description?: string;
    status?: OrderStatus; // Assuming OrderStatus is defined in your enums
    package?: Package; // Assuming Package is the modified name from PackageResult
    voucher?: Voucher; // Assuming Voucher is the modified name from VoucherResult
}
