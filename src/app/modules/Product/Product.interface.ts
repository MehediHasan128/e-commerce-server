export interface Variant {
    type: string;
    value: string;
}

export interface Inventory {
    quantity: number;
    inStock: boolean;
}

export type Product = {
    name: string;
    description: string;
    category: string;
    price: number;
    tags: string[];
    variants: Variant[];
    inventory: Inventory;
}
