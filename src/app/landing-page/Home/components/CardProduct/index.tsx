"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { products } from "@/db/products";
import clsx from "clsx";
import Image from "next/image";

export default function CardProduct() {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };
  return (
    <>
      {products.map((product) => (
        <Card key={product.id} className="min-h-80 cursor-pointer">
          <CardHeader className="relative">
            {product.pricing.isPromotional ? (
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
                  {product.pricing.discountPercentage}% OFF
                </span>
              </div>
            ) : (
              ""
            )}
            <Image
              className="w-full h-full transition-600 bg-cover bg-center"
              src={product.media.images[0]}
              width={1080}
              height={720}
              loading="eager"
              alt={product.name}
            />
          </CardHeader>
          <CardTitle className="font-semibold px-1.5 text-md">
            {product.name}
          </CardTitle>
          <CardContent className="flex flex-col px-1.5 gap-1">
            {product.pricing.isPromotional ? (
              <>
                <span className="text-sm text-gray-500 line-through">
                  {formatCurrency(product.pricing.basePrice)}
                </span>

                <p className="text-2xl font-bold text-green-600">
                  {formatCurrency(
                    product.pricing.basePrice *
                      (1 - product.pricing.discountPercentage / 100)
                  )}
                  <span className="text-xs">no Pix</span>
                </p>
              </>
            ) : (
              <p className="text-2xl font-bold text-gray-900">
                {formatCurrency(product.pricing.basePrice)}
              </p>
            )}
          </CardContent>
        </Card>
      ))}
    </>
  );
}
