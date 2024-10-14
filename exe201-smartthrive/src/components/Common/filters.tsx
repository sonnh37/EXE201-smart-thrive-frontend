import {OrderStatus, PaymentMethod} from "@/types/enums/order";

export const isDeleted_options = [
    {label: "Active", value: false},
    {label: "Deactivated", value: true},
];

export const isActive_options = [
    {label: "Displaying", value: false},
    {label: "Not show", value: true},
];

export const status_order_options = [
    {label: "Pending", value: OrderStatus.Pending},
    {label: "Cancelled", value: OrderStatus.Cancelled},
    {label: "Completed", value: OrderStatus.Completed},
];
export const payment_order_options = [
    {label: "Creadit card", value: PaymentMethod.CreditCard},
    {label: "Paypal", value: PaymentMethod.Paypal},
    {label: "Bank Transfer", value: PaymentMethod.BankTransfer},
];
