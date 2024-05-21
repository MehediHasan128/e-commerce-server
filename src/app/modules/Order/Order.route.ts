import express from 'express';
import { OrderController } from './Order.controller';


const route = express.Router();


route.post('/', OrderController.CreateOrder)


export const OrderRoute = route;