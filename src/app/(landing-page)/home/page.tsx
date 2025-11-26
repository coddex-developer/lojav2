"use client";
import { products } from "@/db/products";
import Link from "next/link";
import { ProductType } from "@/db/ProductType";
import { BadgePercent, Tag } from "lucide-react";
import { CarouselComponent } from "./components/CarouselComponent";
import CategoryComponent from "./components/CategoryComponent";
import ContainerCards from "./components/ContainerCards";
import CardProduct from "./components/CardProduct";

function HomePage() {

  const filterCategory = products.reduce(
    (acc, item) => {
      if (!item) return acc;

      if (!acc[item.category]) {
        acc[item.category] = [];
      }

      acc[item.category].push(item);
      return acc; // <- ESSENCIAL
    },
    {} as Record<string, ProductType[]>
  );

return (
  <>
    <CarouselComponent />
    <CategoryComponent />
    {/* AGRUPAR ITENS COM PROMOÇÃO */}
    <ContainerCards icon={<BadgePercent className="text-green-600" size={18} />} description="Produtos em promoção">

      {products.map((product) =>
        product.pricing.isPromotional ? (
          <Link key={product.id} href={product.name.replace(" ", "")}>
            <CardProduct
              name={product.name}
              id={product.id}
              pricing={product.pricing}
              media={product.media}
            />
          </Link>
        ) : null
      )}

    </ContainerCards>

    {/* AGRUPAR POR CATEGORIA */}
    {Object.entries(filterCategory).map(([category, items]) => (
      <ContainerCards key={category} icon={<Tag className="text-blue-500" size={18}/>} description={category.charAt(0).toUpperCase() + category.slice(1)}>

        {items.map((product) => (
          product.pricing.isPromotional === false ?
            <Link key={product.id} href={"p/"+product.id.toString()}>
              <CardProduct
                name={product.name}
                id={product.id}
                pricing={product.pricing}
                media={product.media}
              />
            </Link>
            : null
        ))}

      </ContainerCards>
    ))}
  </>
);
}
export default HomePage;
