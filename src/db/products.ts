import { ProductType } from "./ProductType";

const categoryEsponjoso = "Isolamento para Tubulação";
const categoryCobre = "Tubos de Cobre";
const categoryValvula = "Válvulas de Serviço";

export const products: ProductType[] = [
    /* ISOLAMENTO ESPONJOSO */
    {
        id: 1,
        name: "Isolante Esponjoso 1/4",
        category: categoryEsponjoso,
        description: "Isolante térmico flexível ideal para tubulação de 1/4, reduz perdas de energia e evita condensação.",
        inventory: { isInStock: true, stockQuantity: 30 },
        media: { images: ["/images_products/esponjosoweb.jpg"], thumbnailUrl: "" },
        pricing: { basePrice: 3.50, isPromotional: false, discountPercentage: 10, finalPrice: 0 },
        variants: []
    },
    {
        id: 2,
        name: "Isolante Esponjoso 3/8",
        category: categoryEsponjoso,
        description: "Isolamento flexível para tubulação de 3/8, protege contra suor e melhora a eficiência do sistema.",
        inventory: { isInStock: true, stockQuantity: 30 },
        media: { images: ["/images_products/esponjosoweb.jpg"], thumbnailUrl: "" },
        pricing: { basePrice: 3.80, isPromotional: false, discountPercentage: 10, finalPrice: 0 },
        variants: []
    },
    {
        id: 3,
        name: "Isolante Esponjoso 1/2",
        category: categoryEsponjoso,
        description: "Isolamento térmico para tubulação de 1/2, resistente e com excelente vedação contra condensação.",
        inventory: { isInStock: true, stockQuantity: 30 },
        media: { images: ["/images_products/esponjosoweb.jpg"], thumbnailUrl: "" },
        pricing: { basePrice: 4.50, isPromotional: false, discountPercentage: 10, finalPrice: 0 },
        variants: []
    },
    {
        id: 4,
        name: "Isolante Esponjoso 5/8",
        category: categoryEsponjoso,
        description: "Ideal para tubulação de 5/8, garantindo isolamento de qualidade e maior durabilidade do sistema.",
        inventory: { isInStock: true, stockQuantity: 30 },
        media: { images: ["/images_products/esponjosoweb.jpg"], thumbnailUrl: "" },
        pricing: { basePrice: 4.50, isPromotional: false, discountPercentage: 10, finalPrice: 0 },
        variants: []
    },
    {
        id: 5,
        name: "Isolante Esponjoso 3/4",
        category: categoryEsponjoso,
        description: "Isolante robusto para tubulação de 3/4, ideal para instalações residenciais e comerciais.",
        inventory: { isInStock: true, stockQuantity: 30 },
        media: { images: ["/images_products/esponjosoweb.jpg"], thumbnailUrl: "" },
        pricing: { basePrice: 6.00, isPromotional: false, discountPercentage: 10, finalPrice: 0 },
        variants: []
    },

    /* VÁLVULAS DE SERVIÇO */
    {
        id: 6,
        name: "Válvula de Serviço em Cobre 1/4",
        category: categoryValvula,
        description: "Válvula de serviço de cobre 1/4, utilizada para manutenção e carga de gás em sistemas de refrigeração.",
        inventory: { isInStock: true, stockQuantity: 30 },
        media: { images: ["/images_products/servico.webp"], thumbnailUrl: "" },
        pricing: { basePrice: 45.00, isPromotional: false, discountPercentage: 3, finalPrice: 0 },
        variants: []
    },
    {
        id: 7,
        name: "Válvula de Serviço em Cobre 3/8",
        category: categoryValvula,
        description: "Válvula de serviço 3/8 fabricada em cobre de alta resistência, ideal para sistemas de ar condicionado.",
        inventory: { isInStock: true, stockQuantity: 30 },
        media: { images: ["/images_products/servico.webp"], thumbnailUrl: "" },
        pricing: { basePrice: 52.00, isPromotional: false, discountPercentage: 3, finalPrice: 0 },
        variants: []
    },

    /* TUBOS DE COBRE */
    {
        id: 8,
        name: "Tubo de Cobre 1/4 por Metro",
        category: categoryCobre,
        description: "Tubo de cobre rígido para linha frigorígena 1/4, alta durabilidade e excelente resistência térmica.",
        inventory: { isInStock: true, stockQuantity: 30 },
        media: { images: ["/images_products/cobre.webp"], thumbnailUrl: "" },
        pricing: { basePrice: 15.00, isPromotional: false, discountPercentage: 10, finalPrice: 0 },
        variants: []
    },
    {
        id: 9,
        name: "Tubo de Cobre 3/8 por Metro",
        category: categoryCobre,
        description: "Tubo de cobre 3/8 utilizado em instalações de ar condicionado split e sistemas de refrigeração.",
        inventory: { isInStock: true, stockQuantity: 30 },
        media: { images: ["/images_products/cobre.webp"], thumbnailUrl: "" },
        pricing: { basePrice: 22.00, isPromotional: false, discountPercentage: 10, finalPrice: 0 },
        variants: []
    },
    {
        id: 10,
        name: "Tubo de Cobre 1/2 por Metro",
        category: categoryCobre,
        description: "Tubo de cobre 1/2 resistente e próprio para linhas de alta pressão em sistemas de climatização.",
        inventory: { isInStock: true, stockQuantity: 30 },
        media: { images: ["/images_products/cobre.webp"], thumbnailUrl: "" },
        pricing: { basePrice: 30.00, isPromotional: false, discountPercentage: 10, finalPrice: 0 },
        variants: []
    },
    {
        id: 11,
        name: "Tubo de Cobre 5/8 por Metro",
        category: categoryCobre,
        description: "Tubo de cobre 5/8 indicado para sistemas maiores, garantindo durabilidade e alta transferência térmica.",
        inventory: { isInStock: true, stockQuantity: 30 },
        media: { images: ["/images_products/cobre.webp"], thumbnailUrl: "" },
        pricing: { basePrice: 33.00, isPromotional: false, discountPercentage: 10, finalPrice: 0 },
        variants: []
    },
    {
        id: 12,
        name: "Tubo de Cobre 3/4 por Metro",
        category: categoryCobre,
        description: "Tubo de cobre resistente para tubulações 3/4, muito utilizado em sistemas de climatização comerciais.",
        inventory: { isInStock: true, stockQuantity: 30 },
        media: { images: ["/images_products/cobre.webp"], thumbnailUrl: "" },
        pricing: { basePrice: 44.00, isPromotional: false, discountPercentage: 10, finalPrice: 0 },
        variants: []
    },

    /* EXTRA */
    {
        id: 300000000,
        name: "Tubulação de Cobre 1/4 para Instalação",
        category: categoryCobre,
        description: "Tubulação de cobre 1/4 para instalação de ar condicionado, ideal para setups domésticos e comerciais.",
        inventory: { isInStock: true, stockQuantity: 30 },
        media: { images: ["/images_products/cobre.webp"], thumbnailUrl: "" },
        pricing: { basePrice: 30.90, isPromotional: true, discountPercentage: 3, finalPrice: 0 },
        variants: []
    },
];
