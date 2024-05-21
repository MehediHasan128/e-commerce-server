import { Product } from './Product.interface';
import { ProductModel } from './Product.model';

const createProductIntoDB = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};

const getAllProductFromDB = async (searchValue: string) => {
  const query = searchValue
    ? {
        $or: [
          { name: { $regex: searchValue, $options: 'i' } },
          { description: { $regex: searchValue, $options: 'i' } },
          { category: { $regex: searchValue, $options: 'i' } },
        ],
      }
    : {};

  const result = await ProductModel.find(query);
  return result;
};

const getProductByID = async (id: string) => {
  const result = await ProductModel.findOne({ _id: id });
  return result;
};

const updateProduct = async (id: string, updatedData: Partial<Product>) => {
  const result = await ProductModel.updateOne({
    _id: id,
    $set: updatedData,
    new: true,
  });
  return result;
};

const deleteProductFromDB = async (id: string) => {
  const result = ProductModel.deleteOne({ _id: id });
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductFromDB,
  getProductByID,
  updateProduct,
  deleteProductFromDB,
};
