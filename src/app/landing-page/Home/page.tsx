
import { CarouselComponent } from "./components/CarouselComponent";
import CategoryComponent from "./components/CategoryComponent";
import ContainerCards from "./components/ContainerCards";

function HomePage() {

  return (
    <>
      <CarouselComponent />
      <CategoryComponent />
      <ContainerCards description="Produtos em promoção" />
    </>
  );
}
export default HomePage;
