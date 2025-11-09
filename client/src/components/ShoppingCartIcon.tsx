"use client";

import React from "react";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import useCartStore from "@/stores/cartStore";

const ShoppingCartIcon = () => {
    const {cart, hasHydrated} = useCartStore();

    if (!hasHydrated) return null;

    return (
        <Link href = "/cart" className = "relative">
            <ShoppingCart className = "w-4 h-4 text-gray-600" />
            <span className = "flex items-center justify-center absolute -top-3 -right-3 bg-amber-400 text-xs text-gray-600 font-medium rounded-full w-4 h-4">
                {cart.reduce((acc, item) => acc + item.quantity, 0)}
            </span>
        </Link>
    )
}

export default ShoppingCartIcon;