import React from "react";
import Categories from "./Categories";
import { products } from "@/data/productsData";
import ProductCard from "./ProductCard";
import Link from "next/link";
import Filter from "./Filter";

interface ProductListProps {
    category: string;
    params: "homepage" | "products";
}

const ProductList = ({ category, params }: ProductListProps) => {
    return (
        <div className = "w-full">
            <Categories />
            {
                params === "products" && <Filter />
            }
            <div className = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-12">
                {
                    products.map((product) => (
                        <ProductCard key = {product.id} product = {product} />
                    ))
                }
            </div>
            <Link href = { category ? `/products?category=${category}` : "/products"} className = "flex justify-end mt-8 underline text-sm text-gray-500">
                Ver todos los productos
            </Link>
        </div>
    )
}

export default ProductList;