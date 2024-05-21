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

const getAllProduct = async(req : Request, res : Response) =>{
    try{
        const result = await ProductServices.getAllProductFromDB();

        res.status(200).json({
            success: true,
            message: 'Products fetched successfully!',
            data: result
        })
    }catch(error){
        res.status(500).json({
            success: false,
            message: 'Something Wrong',
            error
        })
    }
}

const getSpecificProduct = async(req : Request, res : Response) =>{
    try{
        const id = req.params.productId;
        const result = await ProductServices.getProductByID(id);

        res.status(200).json({
            success: true,
            message: 'Product fetched successfully!',
            data: result
        })
    }catch(error){
        res.status(500).json({
            success: false,
            message: 'Something Wrong',
            error
        })
    }
}

export const ProductController = {
    createProduct,
    getAllProduct,
    getSpecificProduct
}