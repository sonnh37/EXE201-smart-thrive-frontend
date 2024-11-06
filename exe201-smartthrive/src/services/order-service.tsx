import {axiosPost} from "./base-service";

class OrderAPI {
    createPayment = async ({
                               packageId,
                               voucherId,
                               description,
                               paymentMethod,
                               status,
                               totalPrice,
                           }: {
        packageId: string;
        voucherId: string | null;
        paymentMethod: number;
        totalPrice: number;
        description: string;
        status: number;
    }) => {
        return axiosPost(
            "/orders",
            {packageId, voucherId, paymentMethod, totalPrice, description, status},
            {
                
            }
        );
    };
}

const OrderService = new OrderAPI();

export default OrderService;
