import { Order } from './Order.interface';
import { OrderModel } from './Order.model';

const CreateOrderIntoDB = async (order: Order) => {
  const result = await OrderModel.create(order);
  return result;
};

const getAllOrderFromDB = async (searchEmail: string) => {
  const query = searchEmail
    ? {
        $or: [{ email: { $regex: searchEmail, $options: 'i' } }],
      }
    : {};
  const result = await OrderModel.find(query);
  return result;
};

export const OrderService = {
  CreateOrderIntoDB,
  getAllOrderFromDB,
};
