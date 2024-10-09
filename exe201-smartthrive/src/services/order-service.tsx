import { axiosPost } from "./baseService";

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
      { packageId, voucherId, paymentMethod, totalPrice, description, status },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );
  };
}

const OrderService = new OrderAPI();

export default OrderService;
