import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { CarouselComponent } from "./components/CarouselComponent";
import CategoryComponent from "./components/CategoryComponent";
import clsx from "clsx";
import Image from "next/image";

function HomePage() {
  return (
    <>
      <CarouselComponent />
      <CategoryComponent />
      <Card
        className={clsx(
          "w-full",
          "mx-auto",
          "min-w-[300px]",
          "sm:max-w-sm",
          "md:max-w-md",
          "lg:max-w-4xl",
          "px-2"
        )}
      >
        <CardTitle>Produtos em promocção</CardTitle>
        <Card
          className={clsx(
            "grid",
            "grid-cols-2",
            "gap-2",
            "px-2",
            "md:grid-cols-3",
            "lg:grid-cols-4",
            "shadow-transparent",
            "border-transparent",
            "px-0"
          )}
        >
          <Card className="min-h-80">
            <CardHeader className="relative">
                <div className="bg-gray-950/40 backdrop-blur-md rounded-full absolute left-1 -top-4 flex items-center gap-1 py-0.5 px-2">
                    <Image className={clsx("w-6")} src={"/fire.gif"} width={1080} height={720} alt="fire" />
                <span className="text-xs font-bold text-white">30% OFF</span>
                </div>
            </CardHeader>
          </Card>
          <Card className="min-h-80"></Card>
          <Card className="min-h-80"></Card>
          <Card className="min-h-80"></Card>
        </Card>
      </Card>
    </>
  );
}
export default HomePage;
