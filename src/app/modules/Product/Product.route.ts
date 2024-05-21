import express from 'express';
import { ProductController } from './Product.controller';

const route = express.Router();

route.post('/', ProductController.createProduct)
route.get('/', ProductController.getAllProduct)

export const ProductRoutes = route;