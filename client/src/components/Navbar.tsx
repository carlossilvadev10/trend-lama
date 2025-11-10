import React from "react";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "./SearchBar";
import { Bell, Home } from "lucide-react";
import ShoppingCartIcon from "./ShoppingCartIcon";

const Navbar = () => {
    return (
        <nav className = "flex items-center justify-between w-full border-b px-6 md:px-10 lg:px-24 py-5 border-gray-200 pb-4 mb-4">
            <Link href = "/" className = "flex items-center">
                <Image src = "/logo.png" alt = "TrendLama" width = {36} height = {36} className = "w-6 h-6 md:w-9 md:h-9" />
                <p className = "hidden md:block font-medium tracking-wider">
                    TRENDLAMA.
                </p>
            </Link>
            <div className = "flex items-center gap-6">
                <SearchBar />
                <Link href = "/">
                    <Home className = "w-4 h-4 text-gray-600" />
                </Link>
                <Bell className = "w-4 h-4 text-gray-600" />
                <ShoppingCartIcon />
                <Link href = "/login">
                    Iniciar sesión
                </Link>
            </div>
        </nav>
    )
}

export default Navbar