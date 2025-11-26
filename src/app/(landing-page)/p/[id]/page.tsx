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
                        <Card className="px-2 py-1 border-b-0 shadow-transparent">
                            <span className="text-sm text-gray-500 mt-1">Em estoque: {product.inventory.stockQuantity}</span>
                            <CardDescription>{ product.description }</CardDescription>
                            <Button className="cursor-pointer">Adicionar ao carrinho</Button>
                        </Card>
                        </>
                    } />

            </Card>
        </>
    )
} 