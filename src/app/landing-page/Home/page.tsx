import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CarouselComponent } from "./components/CarouselComponent";
import { CardSimIcon, SaladIcon } from "lucide-react";
import "../styles.min.scss"

type CategoryProps = {
    icon: React.ElementType
    name: string
}

function HomePage() {
    const categoryList: CategoryProps[] = [
        {
            icon: CardSimIcon,
            name: "card1"
        },
        {
            icon: SaladIcon,
            name: "card2"
        },
        {
            icon: CardSimIcon,
            name: "card13"
        },
        {
            icon: SaladIcon,
            name: "card233"
        },
        {
            icon: CardSimIcon,
            name: "card1333"
        },
        {
            icon: SaladIcon,
            name: "card23333"
        },
        {
            icon: CardSimIcon,
            name: "card133333"
        },
        {
            icon: SaladIcon,
            name: "card23333333"
        },
        {
            icon: SaladIcon,
            name: "card22222"
        },
        {
            icon: CardSimIcon,
            name: "card22221"
        },
        {
            icon: SaladIcon,
            name: "card2222233"
        },
        {
            icon: CardSimIcon,
            name: "card12223342"
        },
        {
            icon: SaladIcon,
            name: "card2777"
        },
    ]
    return (
        <>
            <CarouselComponent />
            <Card className="w-full border-transparent shadow-transparent mt-2 mx-auto min-w-[300px] sm:max-w-sm md:max-w-md lg:max-w-4xl">
                <CardContent className="flex px-2 flex-col gap-6">
                    <CardTitle>
                        Navegue por categorias:
                    </CardTitle>
                    <div className="card_category overflow-x-scroll overflow-y-hidden flex gap-2">
                        {
                            categoryList.map((category) => (
                                <Card className="p-2 w-full shadow-accent bg-blue-100 hover:bg-blue-300 hover:shadow-blue-900/30 shadow-lg ease-in-out  cursor-pointer rounded-full flex justify-center items-center" key={category.name}>
                                    <category.icon className="btn_category w-10 h-10"/>
                                </Card>
                            ))
                        }
                    </div>

                </CardContent>
            </Card>
        </>
    )
}
export default HomePage;