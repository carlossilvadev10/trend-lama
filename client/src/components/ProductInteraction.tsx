"use client";

import React, { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ProductType } from "@/types";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import useCartStore from "@/stores/cartStore";
import { toast } from "react-toastify";

interface ProductInteractionProps {
    product: ProductType;
    selectedSize: string;
    selectedColor: string;
}

const ProductInteraction = ({ product, selectedSize, selectedColor }: ProductInteractionProps ) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [quantity, setQuantity] = useState(1);
    const {addToCart} = useCartStore();

    const handleTypeChange = (type: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set(type, value);
        router.push(`${pathname}?${params.toString()}`, { scroll: false });
    }

    const handleQuantityChange = (type: "increment" | "decrement") => {
        if (type === "increment") {
            setQuantity(prev => prev + 1);
        } else {
            if (quantity > 1) {
                setQuantity(prev => prev - 1);
            }
        }
    }

    const handleAddToCart = () => {
        addToCart({
            ...product,
            quantity,
            selectedSize,
            selectedColor,
        });
        toast.success("¡Añadido al carrito!");
    }

    return (
        <div className = "flex flex-col gap-4 my-2">
            <div className = "flex flex-col gap-2 text-xs">
                <span className = "text-gray-500">Talla</span>
                <div className = "flex items-center gap-2">
                    {
                        product.sizes.map((size) => (
                            <div key = {size} className = {`cursor-pointer border-1 p-[4px] ${selectedSize === size ? "border-gray-600 border-2" : "border-gray-300"}`} onClick = {() => handleTypeChange("size", size)}>
                                <div className = {`flex items-center justify-center w-6 h-6 ${selectedSize === size ? "bg-black text-white" : "bg-white text-black"}`}>
                                    {size.toUpperCase()}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className = "flex flex-col gap-2 text-sm">
                <span className = "text-gray-500">Color</span>
                <div className = "flex items-center gap-2">
                    {
                        product.colors.map((color) => (
                            <div key = {color} className = {`cursor-pointer border-1 ${selectedColor === color ? "border-gray-600 border-2" : "border-gray-300"}`} onClick = {() => handleTypeChange("color", color)}>
                                <div className = "w-6 h-6" style = {{ backgroundColor: color }} />
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className = "flex flex-col gap-2 text-sm">
                <span className = "text-gray-500">Cantidad</span>
                <div className = "flex items-center gap-2">
                    <button className = "cursor-pointer border-1 border-gray-300 p-1" onClick = {() => handleQuantityChange("decrement")}>
                        <Minus className = "w-4 h-4" />
                    </button>
                    <span>{quantity}</span>
                    <button className = "cursor-pointer border-1 border-gray-300 p-1" onClick = {() => handleQuantityChange("increment")}>
                        <Plus className = "w-4 h-4" />
                    </button>
                </div>
            </div>
            <button className = "flex items-center justify-center gap-2 text-white text-sm font-medium py-2 bg-gray-700 hover:bg-gray-800 transition-all duration-300 rounded-md shadow-lg cursor-pointer" onClick = {handleAddToCart}>
                <Plus className = "w-4 h-4" />
                Añadir al carrito
            </button>
            <button className = "flex items-center justify-center gap-2 text-gray-800 text-sm font-medium py-2 ring-1 ring-gray-400 hover:ring-gray-600 transition-all duration-300 rounded-md shadow-lg cursor-pointer">
                <ShoppingCart className = "w-4 h-4" />
                Comprar esta prenda
            </button>
        </div>
    )
}

export default ProductInteraction;