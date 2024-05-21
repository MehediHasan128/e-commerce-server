import { Request, Response } from "express";
import { OrderService } from "./Order.services";

const CreateOrder = async(req : Request, res : Response) =>{
    try{
        const {Order} = req.body
        const data = await OrderService.CreateOrderIntoDB(Order);
        
        res.status(200).json({
            success: true,
            message: 'Order created successfully!',
            data: data
        })
    }catch(error){
        res.status(500).json({
            success: false,
            message: 'Something Wrong',
            error
        })
    }
}

export const OrderController = {
    CreateOrder
}