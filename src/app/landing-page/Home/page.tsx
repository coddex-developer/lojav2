"use client";
import { products } from "@/db/products";
import CardProduct from "./components/CardProduct";
import { CarouselComponent } from "./components/CarouselComponent";
import CategoryComponent from "./components/CategoryComponent";
import ContainerCards from "./components/ContainerCards";
import Link from "next/link";
import { ProductType } from "@/db/ProductType";

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

  console.log(filterCategory);

  return (
    <>
      <CarouselComponent />
      <CategoryComponent />
      {/* AGRUPAR ITENS COM PROMOÇÃO */}
      <ContainerCards description="Produtos em promoção">

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
        <ContainerCards key={category} description={category}>

          {items.map((product) => (
            product.pricing.isPromotional === false ?
              <Link key={product.id} href={product.name.replace(" ", "")}>
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
