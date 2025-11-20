import { ProductType } from "./ProductType";

const product: ProductType[] = [
    {
        id: 1,
        name: "Esponjoso 1/4",
        category: "esponjoso",
        description: "",
        inventory: { isInStock: false, stockQuantity: 30 },
        media: {images: [], thumbnailUrl: ""},
        pricing: {basePrice: 3, isPromotional: false, discountPercentage: 0, finalPrice: 0},
        variants: []
    }
]
export product;