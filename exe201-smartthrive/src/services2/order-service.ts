import {Const} from "@/lib/const";
import BaseService from "./base-service";
import {Order} from "@/types/order";

class OrderService extends BaseService<Order> {
    constructor() {
        super(Const.API_ORDER);
    }
}

export default new OrderService();