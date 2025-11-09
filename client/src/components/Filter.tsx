"use client";

import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filter = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const handleFilter = (value: string) => {
        const params = new URLSearchParams(searchParams);
        params.set("sort", value);
        router.push(`${pathname}?${params.toString()}`, { scroll: false });
    }

    return (
        <div className = "flex items-center justify-end gap-2 text-sm text-gray-500 my-6 rounded-sm">
            <span>Ordenar por:</span>
            <select name = "sort" id = "sort" className = "ring ring-gray-200 shadow-md p-1" onChange = {(e) => handleFilter(e.target.value)}>
                <option value = "newest">Lo más nuevo</option>
                <option value = "oldest">Lo más antiguo</option>
                <option value = "asc">Precio: Menor a Mayor</option>
                <option value = "desc">Precio: Mayor a Menor</option>
            </select>
        </div>
    )
}

export default Filter;