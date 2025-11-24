"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "./SearchBar";
import { Bell, Home } from "lucide-react";
import ShoppingCartIcon from "./ShoppingCartIcon";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className = {`fixed top-0 left-0 right-0 z-50 flex items-center justify-between w-full border-b px-6 md:px-10 lg:px-24 py-5 transition-all duration-300 ease-in-out ${isScrolled ? "border-white/10 bg-white shadow-md" : "border-gray-200 bg-white"}`}>
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
                <Link href = "/login" className = "px-2 py-1 bg-amber-400 hover:bg-amber-500 transition-all duration-300 rounded-md">
                    Iniciar sesión
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;