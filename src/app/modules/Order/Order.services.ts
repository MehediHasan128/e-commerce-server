import { Order } from "./Order.interface";
import { OrderModel } from "./Order.model";

const CreateOrderIntoDB = async(order: Order) =>{
    const result = await OrderModel.create(order);
    return result;
}

const getAllOrderFromDB = async() =>{
    const result = await OrderModel.find();
    return result;
}

export const OrderService = {
    CreateOrderIntoDB,
    getAllOrderFromDB
}