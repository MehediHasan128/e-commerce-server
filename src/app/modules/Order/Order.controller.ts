import { Request, Response } from 'express';
import { OrderService } from './Order.services';
import OrderValidationSchema from './Order.validation';

const CreateOrder = async (req: Request, res: Response) => {
  try {
    const { Order } = req.body;

    const zodParseOrder = await OrderValidationSchema.parse(Order);

    const data = await OrderService.CreateOrderIntoDB(zodParseOrder);

    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something Wrong',
      error,
    });
  }
};

const getAllOrder = async (req: Request, res: Response) => {
  const { email } = req.query;
  try {
    const data = await OrderService.getAllOrderFromDB(email as string);

    res.status(200).json({
      success: true,
      message: email
        ? 'Orders fetched successfully for user email!'
        : 'Orders fetched successfully!',
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something Wrong',
      error,
    });
  }
};

export const OrderController = {
  CreateOrder,
  getAllOrder,
};
