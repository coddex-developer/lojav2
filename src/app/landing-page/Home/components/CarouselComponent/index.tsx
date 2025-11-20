"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselComponent() {
    const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  )
    return (
        <Carousel plugins={[plugin.current]} className="w-full relative mx-auto min-w-[300px] sm:max-w-sm md:max-w-md lg:max-w-4xl">
            <CarouselContent>
                {Array.from({ length: 10 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Card className="bg-gray-700 h-[250px] px-0">
                                <CardContent className="flex h-full aspect-square items-center justify-center p-6">
                                    <span className="text-4xl font-semibold">{index + 1}</span>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex"/>
            <CarouselNext className="hidden md:flex"/>
        </Carousel>
    )
}
