import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProductMedia, ProductPricing } from "@/db/ProductType";
import clsx from "clsx";
import Image from "next/image";

type CardType =  {
  id: string | number,
  name: string,
  pricing: ProductPricing,
  media: ProductMedia
}

export default function CardProduct({ id, name, pricing, media }: CardType) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };
  return (
    <>
      <Card
        key={id}
        className={clsx(
          "min-h-80",
          "cursor-pointer",
          "hover:shadow-xl",
          "lg:hover:scale-105",
          "transition-all",
          "ease-in-out"
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
                "left-1",
                "-top-4",
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
                {pricing.discountPercentage}% OFF
              </span>
            </div>
          ) : (
            ""
          )}
          <Image
            className="w-full h-full transition-600 bg-cover bg-center"
            src={media.images[0]}
            width={1080}
            height={720}
            loading="eager"
            alt={name}
          />
        </CardHeader>
        <CardTitle className="font-semibold px-1.5 text-md">
          {name}
        </CardTitle>
        <CardContent className="flex flex-col px-1.5 gap-1">
          {pricing.isPromotional ? (
            <>
              <span className="text-sm text-gray-500 line-through">
                {formatCurrency(pricing.basePrice)}
              </span>

              <p className="text-2xl font-bold text-green-600">
                {formatCurrency(
                  pricing.basePrice *
                  (1 - pricing.discountPercentage / 100)
                )}
                <span className="text-xs">no Pix</span>
              </p>
            </>
          ) : (
            <p className="text-2xl font-bold text-gray-900">
              {formatCurrency(pricing.basePrice)}
            </p>
          )}
        </CardContent>
      </Card>
    </>
  );
}
