import { OrderStatus, PaymentMethod } from "../enums/order";
import { CreateCommand, UpdateCommand } from "./base-command";

export interface OrderCreateCommand extends CreateCommand {
    packageId?: string;
    voucherId?: string;
    paymentMethod?: PaymentMethod;
    totalPrice?: number;
    description?: string;
    status?: OrderStatus;
}

export interface OrderUpdateCommand extends UpdateCommand {
    packageId?: string;
    voucherId?: string;
    paymentMethod?: PaymentMethod;
    totalPrice?: number;
    description?: string;
    status?: OrderStatus;
}