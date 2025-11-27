import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProductMedia, ProductPricing } from "@/db/ProductType";
import clsx from "clsx";
import Image from "next/image";

type CardType = {
  id: string | number,
  name: string,
  pricing: ProductPricing,
  media: ProductMedia,
  props?: React.ReactNode
}

export default function CardProduct({ id, name, pricing, media, props }: CardType) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };
  
  const finalPrice = pricing.isPromotional
    ? pricing.basePrice * (1 - pricing.discountPercentage / 100)
    : pricing.basePrice;

  return (
    <>
      <Card
        key={id}
        className={clsx(
          "min-h-80",
          "cursor-pointer",
          "hover:shadow-2xl", // Sombra mais proeminente no hover
          "hover:scale-[1.03]", // Efeito de zoom leve e elegante
          "transition-all",
          "duration-300", // Aumenta a duração da transição para suavizar
          "ease-in-out",
          "relative",
          "group", // Adiciona a classe 'group' para interações complexas
          "p-0", // Remove o padding padrão do Card (se houver) para controle total
        )}
      >
        {/*
          1. ETIQUETA DE PROMOÇÃO: Posicionamento no canto superior direito para destaque.
          2. IMAGEM: Uso de 'fill' e 'rounded-t' no pai.
        */}
        <div className="relative w-full h-[200px] overflow-hidden rounded-t-lg">
          {/* Fundo escuro sutil no hover para destacar a imagem */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300 z-10" />

          <Image
            className="object-cover transition-all duration-500 group-hover:scale-105" // Animação de zoom na imagem ao passar o mouse
            src={media.images[0]}
            alt={name}
            fill={true} // Usando 'fill' para otimizar com Next.js
            loading="eager"
          />

          {pricing.isPromotional && (
            <div
              className={clsx(
                "absolute",
                "top-3",
                "right-3",
                "bg-red-600", // Cor mais chamativa para promoção
                "rounded-lg",
                "z-20", // Garante que fique sobre a imagem
                "px-2",
                "py-1",
                "shadow-md"
              )}
            >
              <span className="text-sm font-extrabold text-white tracking-wider">
                -{pricing.discountPercentage}% OFF
              </span>
            </div>
          )}
        </div>
        
        {/*
          3. CONTEÚDO E PREÇO: Usando p-4 para padding interno consistente.
        */}
        <div className="p-4 flex flex-col gap-2">
          <CardTitle className="font-bold text-lg leading-tight line-clamp-2 min-h-[2.5rem]">
            {name}
          </CardTitle>

          <CardContent className="flex flex-col p-0 gap-1">
            {pricing.isPromotional ? (
              <>
                {/* Preço de referência: Menor e com cor mais clara */}
                <span className="text-sm text-gray-400 line-through">
                  {formatCurrency(pricing.basePrice)}
                </span>
                
                {/* Preço de promoção: Destacado, maior e em cor de destaque */}
                <p className="text-3xl font-extrabold text-red-600 flex items-baseline">
                  {formatCurrency(finalPrice)}
                  <span className="text-sm font-semibold ml-1 text-gray-700">à vista</span>
                </p>
                {/* Parcela (opcional, mas comum para e-commerce) */}
                <p className="text-xs text-gray-600 mt-0.5">
                    ou em até 10x de {formatCurrency(finalPrice / 10)} sem juros
                </p>
              </>
            ) : (
              <p className="text-3xl font-extrabold text-gray-900">
                {formatCurrency(pricing.basePrice)}
              </p>
            )}
          </CardContent>
          {props}
        </div>
      </Card>
    </>
  );
}