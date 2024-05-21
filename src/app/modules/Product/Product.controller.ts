import { Request, Response } from 'express';
import { ProductServices } from './Product.services';

const createProduct = async (req: Request, res: Response) => {
  try {
    const { Product: productData } = req.body;
    const result = await ProductServices.createProductIntoDB(productData);

    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something wrong',
      error,
    });
  }
};



export const ProductController = {
    createProduct
}