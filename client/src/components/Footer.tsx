import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className = "flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-4 lg:gap-0 mt-16 bg-gray-800 px-10 lg:px-24 py-8">
            <div className = "flex flex-col items-center md:items-start gap-4">
                <Link href = "/" className = "flex items-center">
                    <Image src = "/logo.png" alt = "TrendLama" width = {36} height = {36} className = "w-6 h-6 md:w-9 md:h-9" />
                    <p className = "hidden md:block font-medium tracking-wider text-white">
                        TRENDLAMA.
                    </p>
                </Link>
                <p className = "text-sm text-gray-400">
                    © {new Date().getFullYear()} Trendlama.
                </p>
                <p className = "text-sm text-gray-400">
                    Todos los derechos reservados.
                </p>
            </div>
            <div className = "flex flex-col items-center md:items-start gap-4 text-sm text-gray-400">
                <p className = "text-sm text-amber-50">Links útiles</p>
                <Link href = "">Inicio</Link>
                <Link href = "">Centro de ayuda</Link>
                <Link href = "">Términos de servicio</Link>
                <Link href = "">Política de privacidad</Link>
            </div>
            <div className = "flex flex-col items-center md:items-start gap-4 text-sm text-gray-400">
                <p className = "text-sm text-amber-50">Productos</p>
                <Link href = "">Todos los productos</Link>
                <Link href = "">Novedades</Link>
                <Link href = "">Más vendidos</Link>
                <Link href = "">Rebajas</Link>
            </div>
            <div className = "flex flex-col items-center md:items-start gap-4 text-sm text-gray-400">
                <p className = "text-sm text-amber-50">Compañía</p>
                <Link href = "">Sobre nosotros</Link>
                <Link href = "">Contacto</Link>
                <Link href = "">Blog</Link>
                <Link href = "">Programa de afiliados</Link>
            </div>
        </div>
    )
}

export default Footer;