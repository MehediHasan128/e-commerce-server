import { Schema, model } from 'mongoose';
import { Inventory, Product, Variant } from './Product.interface';

const VariantSchema = new Schema<Variant>({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

const InventorySchema = new Schema<Inventory>({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

const ProductSchema = new Schema<Product>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
  tags: { type: [String], required: true },
  variants: [VariantSchema],
  inventory: InventorySchema,
});

export const ProductModel = model<Product>('product', ProductSchema);
