import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProductMedia, ProductPricing } from "@/db/ProductType";
import clsx from "clsx";
import Image from "next/image";

type CardType =  {
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
  return (
    <>
      <Card
        key={id}
        className={clsx(
          "min-h-75 flex flex-col gap-3 justify-between",
          "cursor-pointer",
          "hover:shadow-xl",
          "transition-all",
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
                {pricing.discountPercentage}% OFF
              </span>
            </div>
          ) : (
            ""
          )}
          <Image
            className="w-full max-h-[130px]  md:max-h-[180] object-contain bg-center"
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
