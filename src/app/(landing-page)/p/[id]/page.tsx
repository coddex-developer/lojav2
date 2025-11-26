"use client"
import { products } from "@/db/products"
import { useParams } from "next/navigation"
import CardProduct from "../../home/components/CardProduct"
import { Card, CardContent, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Share2 } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function Page() {
    const { id } = useParams()
    if (!id) return null
    const product = products.find(item => item.id === +id)
    if (!product) return null
    const shareUrl = () => {
        alert("Copiado com sucesso!")
        navigator.clipboard.writeText("http://lojav2.vercel.app/p/" + id)
    }
    return (
        <>
            <Card className="max-w-lg lg:max-w-2xl mx-auto px-4 py-0 mt-10 border-0 shadow-transparent bg-gray-50">
                <CardProduct
                    id={product.id}
                    media={product.media}
                    name={product.name}
                    pricing={product.pricing}
                    key={product.id} props={
                        <>
                            <Share2 onClick={shareUrl} size={28} className="absolute left-[90%] bg-gray-800/50 text-gray-50 p-0.5 rounded-md" />
                            <Card className="px-2 py-1 border-b-0 shadow-transparent">
                                <span className="text-sm text-gray-500 mt-1">Em estoque: {product.inventory.stockQuantity}</span>
                                <CardDescription>{product.description}</CardDescription>
                                <Button className="cursor-pointer">Adicionar ao carrinho</Button>
                            </Card>
                        </>
                    } />

            </Card>

            <Card className="flex justify-center relative border-0 shadow-transparent mt-10 mx-2 bg-gray-50">
                <h2 className="ml-4 md:text-center font-semibold">As pessoas também procuram:</h2>
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full max-w-sm mx-auto"
                >
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index} className="basis-1/3">
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <span className="text-3xl font-semibold">{index + 1}</span>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </Card>
        </>
    )
} 