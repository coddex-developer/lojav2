"use client"
import CardProduct from "./components/CardProduct";
import { CarouselComponent } from "./components/CarouselComponent";
import CategoryComponent from "./components/CategoryComponent";
import ContainerCards from "./components/ContainerCards";

function HomePage() {

  return (
    <>
      <CarouselComponent />
      <CategoryComponent />
      <ContainerCards description="Produtos em promoção">
        <CardProduct />
      </ContainerCards>
      <ContainerCards description="Ofertas que voçê vai amar" />
    </>
  );
}
export default HomePage;
