"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { ProductType } from "@/types";
import useCartStore from "@/stores/cartStore";
import { toast } from "react-toastify";

type ProductCardProps = {
    product: ProductType;
};

const ProductCard = ({ product }: ProductCardProps) => {
    const [productTypes, setProductTypes] = useState({
        size: product.sizes[0],
        color: product.colors[0],
    });

    const {addToCart} = useCartStore();

    const handleProductType = ({ type, value }: { type: "size" | "color", value: string }) => {
        setProductTypes((prev) => ({
            ...prev,
            [type]: value,
        }))
    }

    const handleAddToCart = () => {
        addToCart({
            ...product,
            quantity: 1,
            selectedSize: productTypes.size,
            selectedColor: productTypes.color,
        });
        toast.success("¡Añadido al carrito!");
    }

    return (
        <div className = "shadow-lg rounded-lg overflow-hidden">
            <Link href = {`/products/${product.id}`}>
                <div className = "relative aspect-[2/3] overflow-hidden">
                    <Image src = {product.images[productTypes.color]} alt = {product.name} fill className = "object-cover hover:scale-105 transition-all duration-300" />
                </div>
            </Link>
            <div className = "flex flex-col gap-4 p-4">
                <h2 className = "font-medium">
                    {product.name}
                </h2>
                <p className = "text-sm text-gray-500">
                    {product.shortDescription}
                </p>
                <div className = "flex items-center gap-4 text-xs">
                    <div className = "flex flex-col gap-1">
                        <span className = "text-gray-500">Talla</span>
                        <select name = "size" id = "size" className = " rounded-md px-2 py-1" onChange = {(e) => handleProductType({ type: "size", value: e.target.value })}>
                            {
                                product.sizes.map((size, i) => (
                                    <option key = {i} value = {size}>{size.toUpperCase()}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className = "flex flex-col gap-1">
                        <span className = "text-gray-500">Color</span>
                        <div className = "flex items-center gap-2">
                            {
                                product.colors.map((color, i) => (
                                    <div key = {i} className = {`cursor-pointer border-1 ${productTypes.color === color ? "border-gray-400" : "border-gray-200"} rounded-full p-[1.2px]`} onClick = {() => handleProductType({ type: "color", value: color })}>
                                        <div className = "w-[14px] h-[14px] rounded-full" style = {{ backgroundColor: color }} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className = "flex items-center justify-between">
                    <p className = "font-medium">
                        S/. {product.price.toFixed(2)}
                    </p>
                    <button className = "flex items-center gap-2 ring-1 ring-gray-200 shadow-lg rounded-md px-2 py-1 text-sm cursor-pointer hover:text-white hover:bg-black transition-all duration-300" onClick = {handleAddToCart}>
                        <ShoppingCart className = "w-4 h-4" />
                        Añadir al carrito
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;