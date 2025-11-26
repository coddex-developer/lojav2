"use client"
import { products } from "@/db/products"
import { useParams } from "next/navigation"
import CardProduct from "../../home/components/CardProduct"
import { Card, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Page() {
    const { id } = useParams()
    if (!id) return null
    const product = products.find(item => item.id === +id)
    if (!product) return null
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
                            <CardDescription>{ product.description }</CardDescription>
                            <Button className="cursor-pointer">Adicionar ao carrinho</Button>
                        </>
                    } />

            </Card>
        </>
    )
} 