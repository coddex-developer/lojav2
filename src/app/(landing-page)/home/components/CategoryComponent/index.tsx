"use client";
import * as React from "react";
import { Card, CardAction, CardContent, CardTitle } from "@/components/ui/card";
import { CardSimIcon, CircleSlashedIcon, RotateCcwKey, SaladIcon } from "lucide-react";
import "./styles.min.scss";
import clsx from "clsx";
import { products } from "@/db/products";
import { ProductType } from "@/db/ProductType";
import Link from "next/link";

export type CategoryProps = {
  icon: React.ElementType;
  name: string;
};

export default function CategoryComponent() {
  const productCategory = products.reduce(
    (acc: Record<string, ProductType[]>, item: ProductType) => {
      const category = item.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(item);
      return acc;
    },
    {} as Record<string, ProductType[]>
  );

  return (
    <>
      <Card className="grid grid-cols-3 lg:grid-cols-4 w-md md:w-lg lg:min-w-4xl mx-auto">
        {Object.entries(productCategory).map(([categoryName, item]) => (
          <>
            <Card className="flex justify-center items-center rounded-full p-2 w-15 h-15 mx-auto bg-blue-100">
              <Link className="" href={`/nada`} key={categoryName}>
                <CircleSlashedIcon size={40} />
              </Link>
            </Card>
          </>
        ))}
      </Card>
    </>
  );
}
