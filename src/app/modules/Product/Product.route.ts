import express from 'express';
import { ProductController } from './Product.controller';

const route = express.Router();

route.post('/', ProductController.createProduct)
route.get('/', ProductController.getAllProduct)
route.get('/:productId', ProductController.getSpecificProduct)
route.put('/:productId', ProductController.updateProductById)

export const ProductRoutes = route;