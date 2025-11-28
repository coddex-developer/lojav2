"use client"
import { products } from "@/db/products"
import { useParams } from "next/navigation"
import CardProduct from "../../home/components/CardProduct"
import { Card, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Share2, ShoppingCart } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"
import { useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from "next/link";
import { ProductType } from "@/db/ProductType"
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Bounce, toast, ToastContainer } from 'react-toastify'
// Função utilitária para pegar N produtos aleatórios
const getRandomProducts = (allProducts: ProductType[], currentProductId: number | string, count: number): ProductType[] => {
    // Se o ID não for válido, retorna lista vazia para evitar erro
    if (!currentProductId) return [];

    const availableProducts = allProducts.filter(p => p.id !== +currentProductId);
    for (let i = availableProducts.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [availableProducts[i], availableProducts[j]] = [availableProducts[j], availableProducts[i]];
    }
    return availableProducts.slice(0, count);
};

export default function Page() {
    const { id } = useParams();

    // 1. Calcular os dados BÁSICOS primeiro (sem retornar nada ainda)
    const productId = id ? +id : null;
    const product = products.find(item => item.id === productId);

    // 2. Declarar HOOKS incondicionalmente (Sempre são chamados, independente se existe produto ou não)
    // Usamos o operador ?. (optional chaining) para evitar erro se product for undefined
    const [selectedImage, setSelectedImage] = useState<string | undefined>(product?.media?.images?.[0]);
    const [selectedVariant, setSelectedVariant] = useState(
        product?.variants && product.variants.length > 0 ? product.variants[0] : null
    );

    // useEffect: Se o usuário mudar de página (/p/1 para /p/2), atualizamos o estado
    useEffect(() => {
        if (product) {
            setSelectedImage(product?.media?.images?.[0]);
            setSelectedVariant(product?.variants && product.variants.length > 0 ? product.variants[0] : null);
        }
    }, [product]);

    // 3. AGORA sim podemos fazer os "Early Returns" (Retornos antecipados)
    if (!productId || !product) {
        return (
            <div className="text-center mt-20 text-xl font-bold text-gray-700">
                Produto não encontrado.
            </div>
        );
    }

    // 4. Lógica restante (só executa se o produto existir)
    const randomProducts = getRandomProducts(products, productId, 6);

    const shareUrl = () => {
        navigator.clipboard.writeText(`${window.location.origin}/p/${id}`);
        toast.success('Link do produto copiado com sucesso!', {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    };

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(value);
    };

    const finalPrice = product.pricing.isPromotional
        ? product.pricing.basePrice * (1 - product.pricing.discountPercentage / 100)
        : product.pricing.basePrice;

    const currentStock = selectedVariant ? selectedVariant.stockQuantity : product.inventory.stockQuantity;
    const isOutOfStock = currentStock === 0;

    // Garantir que selectedImage tenha valor (fallback para a primeira imagem se o estado falhar)
    const displayImage = selectedImage || product.media.images[0];

    return (
        <>
            <Breadcrumb className="mt-10 mb-3 ml-1">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <Link className="hover:bg-gray-800 hover:text-gray-50 duration-200 py-1 px-3 rounded-full" href={`/`}>Início</Link>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator></BreadcrumbSeparator>
                    <BreadcrumbItem>
                        <BreadcrumbPage className="hover:bg-gray-300 duration-200 py-1 px-3 rounded-full border-b-2">Produto</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className="bg-gray-50 min-h-screen pt-10">
                {/* Detalhes do Produto Principal */}
                <Card className="max-w-6xl mx-auto p-4 md:p-8 shadow-lg border-0 bg-white">
                    <div className="flex flex-col lg:flex-row lg:justify-between gap-8">

                        {/* Galeria de Imagens */}
                        <div className="w-full lg:w-1/2 flex gap-4">
                            {product.media.images.length > 1 && (
                                <div className="flex flex-col gap-3 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                                    {product.media.images.map((img, index) => (
                                        <div
                                            key={index}
                                            className={clsx(
                                                "relative w-16 h-16 rounded-md overflow-hidden cursor-pointer border-2 transition-colors flex-shrink-0",
                                                img === displayImage ? "border-blue-600 shadow-md" : "border-gray-200 hover:border-blue-300"
                                            )}
                                            onClick={() => setSelectedImage(img)}
                                        >
                                            <Image
                                                src={img}
                                                alt={`Thumbnail ${index}`}
                                                fill={true}
                                                className="object-cover"
                                                sizes="64px"
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}

                            <div className="relative flex-1 h-80 md:h-96 rounded-lg overflow-hidden shadow-md">
                                {product.pricing.isPromotional && (
                                    <div
                                        className={clsx(
                                            "bg-gray-950/60",
                                            "backdrop-blur-md",
                                            "z-1",
                                            "rounded-full",
                                            "absolute",
                                            "left-1",
                                            "top-4",
                                            "flex",
                                            "justify-center",
                                            "items-center",
                                            "gap-1",
                                            "py-0.5",
                                            "px-2"
                                        )}
                                    >
                                        <Image
                                            className={clsx("w-6")}
                                            src={"/fire.gif"}
                                            width={1080}
                                            height={720}
                                            alt="fire"
                                        />
                                        <span className="text-xs font-bold text-white">
                                            {product.pricing.discountPercentage}% OFF
                                        </span>
                                    </div>
                                )}
                                <Image
                                    src={displayImage}
                                    alt={product.name}
                                    fill={true}
                                    className="object-contain bg-white p-2"
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                            </div>
                        </div>

                        {/* Informações */}
                        <div className="w-full lg:w-1/2 flex flex-col gap-4">
                            <div className="flex justify-between items-start">
                                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                                    {product.name}
                                </h1>
                                <Button variant="ghost" size="icon" onClick={shareUrl} className="text-gray-600 cursor-copy hover:text-gray-900 transition-colors">
                                    <Share2 size={24} />
                                </Button>
                            </div>

                            <div className="my-2">
                                {product.pricing.isPromotional && (
                                    <span className="text-xl text-gray-400 line-through block">
                                        De: {formatCurrency(product.pricing.basePrice)}
                                    </span>
                                )}
                                <p className={`text-4xl font-extrabold flex items-baseline ${product.pricing.isPromotional === true ? "text-green-600" : "text-blue-600"}`}>
                                    {formatCurrency(finalPrice)}
                                    <span className={`text-base font-semibold ml-2 text-gray-700`}>à vista no Pix</span>
                                </p>
                                {product.pricing.basePrice > 100 && (
                                    <p className="text-sm text-gray-600 mt-1">
                                        ou em até <strong>10x de {formatCurrency(finalPrice / 10)}</strong> sem juros
                                    </p>
                                )}
                            </div>

                            {/* Variantes */}
                            {product.variants && product.variants.length > 0 && (
                                <div className="flex flex-col gap-2 border-t pt-4">
                                    <h3 className="font-semibold text-gray-800">Opções: {selectedVariant?.name}</h3>
                                    <div className="flex gap-2 flex-wrap">
                                        {product.variants.map(variant => (
                                            <Button
                                                key={variant.id}
                                                variant={selectedVariant?.id === variant.id ? "default" : "outline"}
                                                onClick={() => setSelectedVariant(variant)}
                                                className={clsx(
                                                    "transition-all",
                                                    selectedVariant?.id === variant.id ? "bg-blue-600 hover:bg-blue-700" : "hover:bg-gray-100",
                                                    variant.stockQuantity === 0 && "opacity-50 cursor-not-allowed border-dashed"
                                                )}
                                                disabled={variant.stockQuantity === 0}
                                            >
                                                {variant.name}
                                            </Button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <CardDescription className="text-gray-600 text-base pt-4 border-t">
                                <strong>Descrição:</strong> {product.description}
                            </CardDescription>

                            <div className="flex flex-col md:flex-row items-center gap-4 mt-2">
                                <span className="text-lg font-semibold text-gray-700">
                                    Em estoque:
                                    <span className={clsx("font-bold ml-1", currentStock > 0 ? "text-gray-600" : "text-red-600")}>
                                        {currentStock}
                                    </span>
                                </span>
                                <Button
                                    className="w-full flex-1 text-lg py-2 md:py-5 lg:py-6 bg-blue-600 hover:bg-blue-700 font-bold shadow-lg transition-transform hover:scale-[1.01] cursor-pointer"
                                    disabled={isOutOfStock}
                                >
                                    <ShoppingCart className="mr-2 h-5 w-5" /> {isOutOfStock ? "Esgotado" : "Adicionar ao Carrinho"}
                                </Button>
                            </div>

                            <Card className="mt-4 border shadow-sm p-4 bg-gray-50">
                                <h3 className="font-semibold text-gray-800">Detalhes Técnicos</h3>
                                <ul className="text-sm text-gray-600 list-disc ml-4">
                                    <li><strong>Categoria:</strong> {product.category}</li>
                                </ul>
                            </Card>
                        </div>
                    </div>
                </Card>

                <hr className="mt-12 mb-8 max-w-6xl mx-auto" />

                {/* Carrossel de Produtos */}
                {randomProducts.length > 0 && (
                    <div className="max-w-6xl mx-auto px-4 pb-12">
                        <h2 className="text-2xl font-bold mb-6 text-gray-900">Produtos que você pode gostar</h2>

                        <Carousel
                            opts={{
                                align: "start",
                                slidesToScroll: 1,
                            }}
                            className="w-full"
                        >
                            <CarouselContent className="-ml-4">
                                {randomProducts.map((p) => (
                                    <CarouselItem key={p.id} className="pl-4 basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                                        <Link href={`/p/${p.id}`} className="block h-full select-none" draggable={false}>
                                            <CardProduct
                                                id={p.id}
                                                media={p.media}
                                                name={p.name}
                                                pricing={p.pricing}
                                            />
                                        </Link>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="absolute cursor-poiner -left-6 top-1/2 transform -translate-y-1/2 hidden md:flex" />
                            <CarouselNext className="absolute cursor-poiner -right-6 top-1/2 transform -translate-y-1/2 hidden md:flex" />
                        </Carousel>
                    </div>
                )}
            </div>
            <ToastContainer
                position="top-center"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </>
    );
}