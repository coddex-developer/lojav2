import { ProductType } from "./ProductType";

// Categorias
const categoryEsponjoso = "Isolamento para Tubulação";
const categoryCobre = "Tubos de Cobre";
const categoryValvula = "Válvulas de Serviço";
const categoryFitas = "Fitas e Vedação";
const categorySuporte = "Fixação e Suporte";
const categoryGas = "Gás Refrigerante";
const categorySolda = "Solda e Trabalho a Quente";
const categoryEletrica = "Materiais Elétricos";
const categoryAcessorios = "Caixas e Acessórios";
const categoryQuimicos = "Produtos Químicos";

export const products: ProductType[] = [
    /* --- ISOLAMENTO ESPONJOSO --- */
    {
        id: 1,
        name: "Isolante Esponjoso 1/4",
        category: categoryEsponjoso,
        description: "Isolante térmico flexível ideal para tubulação de 1/4, reduz perdas de energia e evita condensação.",
        inventory: { isInStock: true, stockQuantity: 30 },
        media: { images: ["/images_products/esponjosoweb.jpg", "/images_products/esponjosoweb2.jpg", "/images_products/esponjosoweb3.webp"], thumbnailUrl: "" },
        pricing: { basePrice: 3.50, isPromotional: false, discountPercentage: 10, finalPrice: 0 },
        variants: []
    },
    {
        id: 2,
        name: "Isolante Esponjoso 3/8",
        category: categoryEsponjoso,
        description: "Isolamento flexível para tubulação de 3/8, protege contra suor e melhora a eficiência do sistema.",
        inventory: { isInStock: true, stockQuantity: 30 },
        media: { images: ["/images_products/esponjosoweb.jpg", "/images_products/esponjosoweb2.jpg", "/images_products/esponjosoweb3.webp"], thumbnailUrl: "" },
        pricing: { basePrice: 3.80, isPromotional: false, discountPercentage: 10, finalPrice: 0 },
        variants: []
    },
    {
        id: 3,
        name: "Isolante Esponjoso 1/2",
        category: categoryEsponjoso,
        description: "Isolamento térmico para tubulação de 1/2, resistente e com excelente vedação contra condensação.",
        inventory: { isInStock: true, stockQuantity: 30 },
        media: { images: ["/images_products/esponjosoweb.jpg", "/images_products/esponjosoweb2.jpg", "/images_products/esponjosoweb3.webp"], thumbnailUrl: "" },
        pricing: { basePrice: 4.50, isPromotional: false, discountPercentage: 10, finalPrice: 0 },
        variants: []
    },
    {
        id: 4,
        name: "Isolante Esponjoso 5/8",
        category: categoryEsponjoso,
        description: "Ideal para tubulação de 5/8, garantindo isolamento de qualidade e maior durabilidade do sistema.",
        inventory: { isInStock: true, stockQuantity: 30 },
        media: { images: ["/images_products/esponjosoweb.jpg", "/images_products/esponjosoweb2.jpg", "/images_products/esponjosoweb3.webp"], thumbnailUrl: "" },
        pricing: { basePrice: 4.50, isPromotional: false, discountPercentage: 10, finalPrice: 0 },
        variants: []
    },
    {
        id: 5,
        name: "Isolante Esponjoso 3/4",
        category: categoryEsponjoso,
        description: "Isolante robusto para tubulação de 3/4, ideal para instalações residenciais e comerciais.",
        inventory: { isInStock: true, stockQuantity: 30 },
        media: { images: ["/images_products/esponjosoweb.jpg", "/images_products/esponjosoweb2.jpg", "/images_products/esponjosoweb3.webp"], thumbnailUrl: "" },
        pricing: { basePrice: 6.00, isPromotional: false, discountPercentage: 10, finalPrice: 0 },
        variants: []
    },

    /* --- VÁLVULAS DE SERVIÇO --- */
    {
        id: 6,
        name: "Válvula de Serviço em Cobre 1/4",
        category: categoryValvula,
        description: "Válvula de serviço de cobre 1/4, utilizada para manutenção e carga de gás em sistemas de refrigeração.",
        inventory: { isInStock: true, stockQuantity: 30 },
        media: { images: ["/images_products/servico.webp"], thumbnailUrl: "" },
        pricing: { basePrice: 45.00, isPromotional: false, discountPercentage: 10, finalPrice: 0 },
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

    /* --- TUBOS DE COBRE --- */
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

    /* --- FITAS E VEDAÇÃO --- */
    {
        id: 13,
        name: "Fita Isolante 10m",
        category: categoryFitas,
        description: "Fita isolante de uso geral para proteção de emendas elétricas e isolamento de cabos.",
        inventory: { isInStock: true, stockQuantity: 50 },
        media: { images: ["/images_products/fita-isolante.webp"], thumbnailUrl: "" },
        pricing: { basePrice: 6.00, isPromotional: false, discountPercentage: 0, finalPrice: 0 },
        variants: []
    },
    {
        id: 14,
        name: "Fita PP Aluminizada",
        category: categoryFitas,
        description: "Fita aluminizada 45mm x 45m, ideal para acabamento e proteção térmica em dutos de ar condicionado.",
        inventory: { isInStock: true, stockQuantity: 40 },
        media: { images: ["/images_products/fita-aluminio.webp"], thumbnailUrl: "" },
        pricing: { basePrice: 6.50, isPromotional: false, discountPercentage: 0, finalPrice: 0 },
        variants: []
    },
    {
        id: 15,
        name: "Fita PVC EOS",
        category: categoryFitas,
        description: "Fita de PVC para acabamento em tubulações de ar condicionado, rolo com 10m x 10cm.",
        inventory: { isInStock: true, stockQuantity: 40 },
        media: { images: ["/images_products/fita-pvc-eos.webp"], thumbnailUrl: "" },
        pricing: { basePrice: 6.00, isPromotional: false, discountPercentage: 0, finalPrice: 0 },
        variants: []
    },

    /* --- FIXAÇÃO E SUPORTE --- */
    {
        id: 16,
        name: "Suporte para Condensadora 400mm",
        category: categorySuporte,
        description: "Par de suportes de 400mm em aço reforçado com pintura eletrostática para unidades condensadoras.",
        inventory: { isInStock: true, stockQuantity: 25 },
        media: { images: ["/images_products/suporte-cond-eos.webp"], thumbnailUrl: "" },
        pricing: { basePrice: 35.00, isPromotional: true, discountPercentage: 6, finalPrice: 0 },
        variants: []
    },
    {
        id: 17,
        name: "Suporte para Condensadora 450mm",
        category: categorySuporte,
        description: "Par de suportes de 450mm para fixação segura de unidades condensadoras em paredes externas.",
        inventory: { isInStock: true, stockQuantity: 25 },
        media: { images: ["/images_products/suporte-cond-eos.webp"], thumbnailUrl: "" },
        pricing: { basePrice: 39.00, isPromotional: false, discountPercentage: 0, finalPrice: 0 },
        variants: []
    },
    {
        id: 18,
        name: "Suporte para Condensadora 500mm",
        category: categorySuporte,
        description: "Par de suportes longos de 500mm, indicados para condensadoras maiores que exigem maior distanciamento da parede.",
        inventory: { isInStock: true, stockQuantity: 20 },
        media: { images: ["/images_products/suporte-cond-eos.webp"], thumbnailUrl: "" },
        pricing: { basePrice: 55.00, isPromotional: true, discountPercentage: 6, finalPrice: 0 },
        variants: []
    },
    {
        id: 19,
        name: "Parafuso para Bucha Sextavada 10mm",
        category: categorySuporte,
        description: "Parafuso sextavado 1/4x55 de alta resistência, ideal para fixação de suportes em alvenaria.",
        inventory: { isInStock: true, stockQuantity: 200 },
        media: { images: ["/images_products/ParafusoSextavada10mm.jpg"], thumbnailUrl: "" },
        pricing: { basePrice: 0.85, isPromotional: false, discountPercentage: 0, finalPrice: 0 },
        variants: []
    },
    {
        id: 20,
        name: "Bucha para Tijolo 8mm",
        category: categorySuporte,
        description: "Bucha de fixação 8mm específica para paredes de tijolo e blocos ocos.",
        inventory: { isInStock: true, stockQuantity: 500 },
        media: { images: ["/images_products/buchas-8-10.jpg"], thumbnailUrl: "" },
        pricing: { basePrice: 0.20, isPromotional: false, discountPercentage: 0, finalPrice: 0 },
        variants: []
    },
    {
        id: 21,
        name: "Bucha para Tijolo 10mm",
        category: categorySuporte,
        description: "Bucha de fixação 10mm reforçada para paredes de tijolo e blocos ocos.",
        inventory: { isInStock: true, stockQuantity: 500 },
        media: { images: ["/images_products/buchas-8-10.jpg"], thumbnailUrl: "" },
        pricing: { basePrice: 0.35, isPromotional: false, discountPercentage: 0, finalPrice: 0 },
        variants: []
    },
    {
        id: 22,
        name: "Parafuso Philips Chata 8mm",
        category: categorySuporte,
        description: "Parafuso cabeça chata Philips 8mm, utilizado para fixações diversas em evaporadoras.",
        inventory: { isInStock: true, stockQuantity: 300 },
        media: { images: ["/images_products/parafusoEvap.webp"], thumbnailUrl: "" },
        pricing: { basePrice: 0.25, isPromotional: false, discountPercentage: 0, finalPrice: 0 },
        variants: []
    },

    /* --- GÁS REFRIGERANTE --- */
    {
        id: 23,
        name: "Gás Refrigerante R410a EOS (750g)",
        category: categoryGas,
        description: "Cilindro descartável de Gás R410a com 750g, acompanha válvula e manopla para facilitar a carga.",
        inventory: { isInStock: true, stockQuantity: 15 },
        media: { images: ["/images_products/gasR410a.avif"], thumbnailUrl: "" },
        pricing: { basePrice: 120.00, isPromotional: false, discountPercentage: 0, finalPrice: 0 },
        variants: []
    },
    {
        id: 24,
        name: "Gás Refrigerante R32 Premium (3Kg)",
        category: categoryGas,
        description: "Cilindro de 3Kg de Gás R32, refrigerante de alta eficiência energética e menor impacto ambiental.",
        inventory: { isInStock: true, stockQuantity: 10 },
        media: { images: ["/images_products/gasR32.webp"], thumbnailUrl: "" },
        pricing: { basePrice: 399.00, isPromotional: false, discountPercentage: 0, finalPrice: 0 },
        variants: []
    },
    {
        id: 25,
        name: "Gás Refrigerante R22 EOS (800g)",
        category: categoryGas,
        description: "Cilindro descartável de Gás R22 com 800g, para manutenção de sistemas mais antigos.",
        inventory: { isInStock: true, stockQuantity: 15 },
        media: { images: ["/images_products/gasR22.avif"], thumbnailUrl: "" },
        pricing: { basePrice: 120.00, isPromotional: false, discountPercentage: 10, finalPrice: 0 },
        variants: []
    },

    /* --- SOLDA E TRABALHO A QUENTE --- */
    {
        id: 26,
        name: "Gás MAP EOS para Maçaricos (400g)",
        category: categorySolda,
        description: "Refil de Gás MAPP Pro para maçaricos portáteis, proporciona alta temperatura para soldas rápidas.",
        inventory: { isInStock: true, stockQuantity: 30 },
        media: { images: ["/images_products/gasMap.avif"], thumbnailUrl: "" },
        pricing: { basePrice: 40.00, isPromotional: false, discountPercentage: 0, finalPrice: 0 },
        variants: []
    },
    {
        id: 27,
        name: "Vareta Foscopo Harris",
        category: categorySolda,
        description: "Vareta de solda Foscopo (Cobre/Fósforo) para brasagem de tubos de cobre em refrigeração.",
        inventory: { isInStock: true, stockQuantity: 100 },
        media: { images: ["/images_products/foscopo.jpg"], thumbnailUrl: "" },
        pricing: { basePrice: 9.00, isPromotional: false, discountPercentage: 0, finalPrice: 0 },
        variants: []
    },

    /* --- ELÉTRICA --- */
    {
        id: 28,
        name: "Disjuntor Monofásico 16A",
        category: categoryEletrica,
        description: "Disjuntor monopolar DIN 16A curva C, proteção essencial para o circuito do ar condicionado.",
        inventory: { isInStock: true, stockQuantity: 40 },
        media: { images: ["/images_products/disjuntor.webp"], thumbnailUrl: "" },
        pricing: { basePrice: 10.00, isPromotional: false, discountPercentage: 0, finalPrice: 0 },
        variants: []
    },
    {
        id: 29,
        name: "Cabo Flexível PP 4 x 1.5mm (Metro)",
        category: categoryEletrica,
        description: "Cabo PP com 4 vias de 1.5mm, ideal para interligação elétrica entre evaporadora e condensadora.",
        inventory: { isInStock: true, stockQuantity: 100 },
        media: { images: ["/images_products/caboPp4por1-5.avif"], thumbnailUrl: "" },
        pricing: { basePrice: 10.00, isPromotional: false, discountPercentage: 0, finalPrice: 0 },
        variants: []
    },
    {
        id: 30,
        name: "Capacitor EOS 25+1.5uF",
        category: categoryEletrica,
        description: "Capacitor duplo 25+1.5uF 380VAC para partida de compressores e ventiladores.",
        inventory: { isInStock: true, stockQuantity: 20 },
        media: { images: ["/images_products/capacitor25uf.webp"], thumbnailUrl: "" },
        pricing: { basePrice: 29.00, isPromotional: false, discountPercentage: 0, finalPrice: 0 },
        variants: []
    },
    {
        id: 31,
        name: "Capacitor EOS 35+2.5uF",
        category: categoryEletrica,
        description: "Capacitor duplo 35+2.5uF 440VAC para partida de compressores de maior capacidade.",
        inventory: { isInStock: true, stockQuantity: 20 },
        media: { images: ["/images_products/capacitor35uf.webp"], thumbnailUrl: "" },
        pricing: { basePrice: 40.00, isPromotional: false, discountPercentage: 0, finalPrice: 0 },
        variants: []
    },

    /* --- CAIXAS E ACESSÓRIOS --- */
    {
        id: 32,
        name: "Caixa Sobrepor para Disjuntor",
        category: categoryAcessorios,
        description: "Caixa plástica de sobrepor para instalação de 1 ou 2 disjuntores DIN, acabamento clean.",
        inventory: { isInStock: true, stockQuantity: 30 },
        media: { images: ["/images_products/caixinha-disjuntor.webp"], thumbnailUrl: "" },
        pricing: { basePrice: 10.00, isPromotional: false, discountPercentage: 0, finalPrice: 0 },
        variants: []
    },
    {
        id: 33,
        name: "Caixa de Passagem para Ar Condicionado",
        category: categoryAcessorios,
        description: "Caixa de espera para infraestrutura de split, com dreno acoplado. Dimensões: 29 x 16,4 x 5cm.",
        inventory: { isInStock: true, stockQuantity: 40 },
        media: { images: ["/images_products/cxDreno.webp"], thumbnailUrl: "" },
        pricing: { basePrice: 22.00, isPromotional: false, discountPercentage: 0, finalPrice: 0 },
        variants: []
    },

    /* --- PRODUTOS QUÍMICOS --- */
    {
        id: 34,
        name: "Graxa Branca Sachê 80g",
        category: categoryQuimicos,
        description: "Sachê de graxa branca para lubrificação de componentes mecânicos e proteção contra oxidação.",
        inventory: { isInStock: true, stockQuantity: 60 },
        media: { images: ["/images_products/graxa-branca-80g.jpg"], thumbnailUrl: "" },
        pricing: { basePrice: 6.00, isPromotional: false, discountPercentage: 2, finalPrice: 0 },
        variants: []
    },
];
