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
    const {searchTerm} = req.query;
    try{
        const result = await ProductServices.getAllProductFromDB(searchTerm as string);

        res.status(200).json({
            success: true,
            message: searchTerm? `Products matching search term '${searchTerm}' fetched successfully!` : 'Product fetched successfully!',
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

const updateProductById = async(req : Request, res : Response) =>{
    try{
        const id = req.params.productId;
    const {Product: updateData} = req.body;
    const result = await ProductServices.updateProduct(id, updateData)

    res.status(200).json({
        success: true,
        message: 'Product updated successfully!',
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

const deleteProduct = async(req : Request, res : Response) =>{
    try{
        const id = req.params.productId;
        const result = await ProductServices.deleteProductFromDB(id);

        res.status(200).json({
            success: true,
            message: 'Product deleted successfully!',
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
    getSpecificProduct,
    updateProductById,
    deleteProduct
}