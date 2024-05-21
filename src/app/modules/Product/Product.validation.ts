import { z } from "zod";

const VariantValidationSchema = z.object({
    type: z.string().min(1, { message: "Type is required" }),
    value: z.string().min(1, { message: "Value is required" }),
})

const InventoryValidationSchema = z.object({
    quantity: z.number().int().nonnegative({ message: "Quantity must be a non-negative integer" }),
    inStock: z.boolean(),
})

const ProductValidationSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    description: z.string().min(5, { message: "Description is required" }),
    category: z.string().min(1, { message: "Category is required" }),
    price: z.number().nonnegative({ message: "Price must be a non-negative number" }),
    tags: z.array(z.string().min(1, { message: "Tag must be a non-empty string" })),
    variants: z.array(VariantValidationSchema),
    inventory: InventoryValidationSchema
});

export default ProductValidationSchema;