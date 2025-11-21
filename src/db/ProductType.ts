export interface ProductPricing {
    basePrice: number;
    discountPercentage: number;
    isPromotional: boolean;
    finalPrice?: number;
}

export interface ProductMedia {
    images: string[];
    thumbnailUrl?: string;
}

export interface ProductInventory {
    stockQuantity: number;
    isInStock: boolean;
}

export interface ProductVariant {
    id: string;
    name: string;
    stockQuantity: number;
    variantImageUrl?: string;
}

export type ProductType = {
    id: number | string;
    name: string;
    description: string;
    category: string;
    pricing: ProductPricing;
    inventory: ProductInventory;
    media: ProductMedia;
    variants?: ProductVariant[];
};