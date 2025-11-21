import { ProductType } from "./ProductType";

export const products: ProductType[] = [
    {
        id: 1,
        name: "Esponjoso 1/4",
        category: "esponjoso",
        description: "",
        inventory: { isInStock: true, stockQuantity: 30 },
        media: { images: ["/images_products/esponjosoweb.jpg"], thumbnailUrl: "" },
        pricing: { basePrice: 3.90, isPromotional: false, discountPercentage: 5, finalPrice: 0 },
        variants: []
    },
    {
        id: 1,
        name: "Esponjoso 3/8",
        category: "esponjoso",
        description: "",
        inventory: { isInStock: true, stockQuantity: 30 },
        media: { images: ["/images_products/esponjosoweb.jpg"], thumbnailUrl: "" },
        pricing: { basePrice: 3.90, isPromotional: true, discountPercentage: 10, finalPrice: 0 },
        variants: []
    },
    {
        id: 1,
        name: "Tubulação de cobre 1/4 para instalação",
        category: "tubulacao-cobre",
        description: "",
        inventory: { isInStock: true, stockQuantity: 30 },
        media: { images: ["/images_products/cobre.webp"], thumbnailUrl: "" },
        pricing: { basePrice: 3.90, isPromotional: false, discountPercentage: 3, finalPrice: 0 },
        variants: []
    },
]