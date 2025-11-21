import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { products } from "@/db/products";
import clsx from "clsx";
import Image from "next/image";

export default function CardProduct() {

    return (
        <>
            {
                products.map(product => (
                    <>
                        <Card key={product.id} className="min-h-80 cursor-pointer">
                            <CardHeader className="relative">
                                {
                                    product.pricing.discountPercentage !== 0 ?
                                        <div className="bg-gray-950/60 backdrop-blur-md z-1 rounded-full absolute left-1 -top-4 flex justify-center items-center gap-1 py-0.5 px-2">
                                            <Image className={clsx("w-6")} src={"/fire.gif"} width={1080} height={720} alt="fire" />
                                            <span className="text-xs font-bold text-white">{product.pricing.discountPercentage}% OFF</span>
                                        </div>
                                        : ""
                                }
                            <Image className="w-full h-full transition-600 bg-cover bg-center" src={product.media.images[0]} width={1080} height={720} alt={product.name}/>
                            </CardHeader>
                            <CardTitle className="text-center font-bold text-md">{product.name}</CardTitle>
                            
                        </Card>
                    </>
                ))
            }
        </>
    )
}