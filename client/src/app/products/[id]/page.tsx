import React from "react";
import Image from "next/image";
import { ProductType } from "@/types";
import ProductInteraction from "@/components/ProductInteraction";
import { Metadata } from "next";

const product: ProductType = {
    id: 1,
    name: "Adidas CoreFit T-Shirt",
    shortDescription: "Camiseta deportiva ligera y transpirable, perfecta para entrenamientos intensos.",
    description: "La Adidas CoreFit T-Shirt combina tecnología de ventilación avanzada con un diseño moderno. Su tejido DryLite mantiene tu cuerpo fresco incluso durante los entrenamientos más exigentes. Ideal para quienes buscan comodidad y rendimiento sin sacrificar estilo.",
    price: 39.9,
    sizes: ["s", "m", "l", "xl", "xxl"],
    colors: ["gray", "purple", "green"],
    images: {
        gray: "/products/1g.png",
        purple: "/products/1p.png",
        green: "/products/1gr.png",
    },
}

export const generateMetadata = async ({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> => {
    const { id } = await params; // ✅ Usar await

    return {
        title: product.name,
        description: product.description, // ✅ Corregido: era "describe"
    }
}

const ProductPage = async ({ params, searchParams }: {
    params: Promise<{ id: string }>, 
    searchParams: Promise<{ size?: string; color?: string }> // ✅ Opcionales con ?
}) => {
    const { id } = await params; // ✅ Agregar await para params
    const { size, color } = await searchParams; // ✅ Ya estaba correcto

    const selectedSize = (size || product.sizes[0]) as string;
    const selectedColor = (color || product.colors[0]) as string;

    return (
        <div className = "flex flex-col lg:flex-row gap-4 md:gap-12 mt-12 px-20">
            <div className = "w-full lg:w-5/12 relative aspect-[2/3]">
                <Image src = {product.images[selectedColor]} alt = {product.name} fill className = "object-contain rounded-md" />
            </div>
            <div className = "flex flex-col gap-4 w-full lg:w-7/12">
                <h2 className = "text-2xl font-medium">
                    {product.name}
                </h2>
                <p className = "text-gray-500">
                    {product.description}
                </p>
                <h2 className = "text-2xl font-semibold">
                    S/. {product.price.toFixed(2)}
                </h2>
                <ProductInteraction product = {product} selectedSize = {selectedSize} selectedColor = {selectedColor} />
                <div className = "flex items-center gap-2">
                    <Image src = "/klarna.png" alt = "klarna" width = {50} height = {25} className = "rounded-md" />
                    <Image src = "/cards.png" alt = "cards" width = {50} height = {25} className = "rounded-md" />
                    <Image src = "/stripe.png" alt = "stripe" width = {50} height = {25} className = "rounded-md" />
                </div>
                <p className = "text-gray-500 text-xs">
                    Al hacer clic en <span className = "font-semibold">Pagar ahora</span>, aceptas nuestros <span className = "underline hover:text-black">Términos y condiciones</span> y nuestra <span className = "underline hover:text-black">Política de privacidad</span>.
                    Nos autorizas a cobrar el método de pago seleccionado por el monto total indicado. Todas las ventas están sujetas a nuestras <span className = "underline hover:text-black">Políticas de devolución y reembolso</span>.
                </p>
            </div>
        </div>
    )
}

export default ProductPage;