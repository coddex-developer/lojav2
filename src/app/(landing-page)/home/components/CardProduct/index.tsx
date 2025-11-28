import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProductMedia, ProductPricing } from "@/db/ProductType";
import clsx from "clsx";
import Image from "next/image";

// 1. Adicionei 'description' na tipagem
type CardType = {
  id: string | number;
  name: string;
  description: string; // Nova propriedade
  pricing: ProductPricing;
  media: ProductMedia;
  props?: React.ReactNode;
};

// 2. Adicionei 'description' na desestruturação das props
export default function CardProduct({
  id,
  name,
  description, 
  pricing,
  media,
  props,
}: CardType) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  // Cálculo do preço com desconto (movido para variável para limpar o JSX)
  const priceWithDiscount = pricing.basePrice * (1 - pricing.discountPercentage / 100);

  return (
    <>
      <Card
        key={id}
        className={clsx(
          "min-h-75 flex flex-col gap-3 justify-between",
          "cursor-pointer",
          "hover:shadow-xl",
          "transition-all",
          "duration-600", // Apliquei a transição de 600ms que você pediu antes
          "ease-in-out",
          "py-3",
          "relative"
        )}
      >
        <CardHeader className="relative">
          {pricing.isPromotional ? (
            <div
              className={clsx(
                "bg-gray-950/60",
                "backdrop-blur-md",
                "z-1",
                "rounded-full",
                "absolute",
                "left-0.5",
                "-top-2",
                "flex",
                "justify-center",
                "items-center",
                "gap-1",
                "py-0.5",
                "px-2"
              )}
            >
              <Image
                className={clsx("w-6")}
                src={"/fire.gif"}
                width={1080}
                height={720}
                alt="fire"
              />
              <span className="text-xs font-bold text-white">
                -{pricing.discountPercentage}% OFF
              </span>
            </div>
          ) : (
            ""
          )}
          <Image
            className="w-full max-h-[130px] md:max-h-[180] object-contain bg-center"
            src={media.images[0]}
            width={1080}
            height={720}
            loading="eager"
            alt={name}
          />
        </CardHeader>

        {/* Bloco de Informações do Produto */}
        <div className="flex flex-col gap-1 px-1.5">
          <CardTitle className="font-semibold text-md leading-tight">
            {name}
          </CardTitle>
          
          {/* 3. Renderização da Descrição */}
          <p className="text-xs text-gray-500 line-clamp-2 min-h-[2.5em]">
            {description}
          </p>
        </div>

        <CardContent className="flex flex-col px-1.5 gap-1 mt-auto">
          {pricing.isPromotional ? (
            <>
              <span className="text-sm text-gray-500 line-through">
                {formatCurrency(pricing.basePrice)}
              </span>

              <p className="text-2xl font-bold text-green-600">
                {formatCurrency(priceWithDiscount)}
                <span className="text-xs ml-1 font-normal text-gray-600">no Pix</span>
              </p>
            </>
          ) : (
            <p className="text-2xl font-bold text-blue-600">
              {formatCurrency(pricing.basePrice)}
            </p>
          )}
        </CardContent>
        {props}
      </Card>
    </>
  );
}