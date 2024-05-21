import { Product } from "./Product.interface";
import { ProductModel } from "./Product.model";

const createProductIntoDB = async(product: Product) =>{
    const result = await ProductModel.create(product);
    return result;
}

export const ProductServices = {
    createProductIntoDB
}