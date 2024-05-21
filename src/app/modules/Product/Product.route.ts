import express from 'express';
import { ProductController } from './Product.controller';

const route = express.Router();

route.post('/', ProductController.createProduct)

export const ProductRoutes = route;