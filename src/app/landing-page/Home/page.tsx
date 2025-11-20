import { Card, CardTitle } from "@/components/ui/card";
import { CarouselComponent } from "./components/CarouselComponent";
import CategoryComponent from "./components/CategoryComponent";

function HomePage() {
    return (
        <>
            <CarouselComponent />
            <CategoryComponent />
            <Card className="w-full mx-auto min-w-[300px] sm:max-w-sm md:max-w-md lg:max-w-4xl px-2">
                <CardTitle>Produtos em promocção</CardTitle>
                <Card className="grid grid-cols-2 gap-2 px-2 md:grid-cols-3 lg:grid-cols-4 shadow-transparent border-transparent">
                    <Card className="min-h-80"></Card>
                    <Card className="min-h-80"></Card>
                    <Card className="min-h-80"></Card>
                    <Card className="min-h-80"></Card>
                </Card>
            </Card>
        </>
    )
}
export default HomePage;