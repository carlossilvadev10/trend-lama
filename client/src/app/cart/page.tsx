"use client";

import React, { useState } from "react";
import { ShoppingCart, Truck, CreditCard, ArrowRight, Trash2 } from "lucide-react";
import { ShippingFormData } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import ShippingForm from "@/components/ShippingForm";
import PaymentForm from "@/components/PaymentForm";
import Image from "next/image";
import useCartStore from "@/stores/cartStore";

const steps = [
    {
        id: 1,
        title: "Carrito",
        icon: ShoppingCart,
    },
    {
        id: 2,
        title: "Envío",
        icon: Truck,
    },
    {
        id: 3,
        title: "Pago",
        icon: CreditCard,
    },
]

const CartPage = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const activeStep = parseInt(searchParams.get("step") || "1");
    const [shippingForm, setShippingForm] = useState<ShippingFormData>();
    const {cart, removeFromCart} = useCartStore();

    return (
        <div className = "flex flex-col items-center justify-center gap-8 mt-12 px-10 sm:px-20">
            <h2 className = "text-2xl font-medium">
                Tu carrito de compras
            </h2>
            <div className = "flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                {
                    steps.map((step) => (
                        <div key = {step.id} className = {`flex items-center gap-2 border-b-2 pb-4 ${step.id === activeStep ? "border-gray-800" : "border-gray-400"}`}>
                            <div className = {`flex items-center justify-center ${step.id === activeStep ? "bg-gray-800" : "bg-gray-400"} w-6 h-6 rounded-full text-white p-4`}>
                                {step.id}
                            </div>
                            <p className = {`flex items-center justify-center gap-2 text-sm font-medium ${step.id === activeStep ? "text-gray-800" : "text-gray-400"}`}>
                                <step.icon />
                                {step.title}
                            </p>
                        </div>
                    ))
                }
            </div>
            <div className = "flex flex-col lg:flex-row gap-16 w-full">
                <div className = "flex flex-col gap-8 w-full lg:w-7/12 shadow-lg border-1 border-gray-100 p-8 rounded-lg">
                    <h2 className = "font-semibold">
                        Mis artículos
                    </h2>
                    {
                        activeStep === 1 ? (
                            cart.map((item) => (
                                <div key = {item.id + item.selectedSize + item.selectedColor} className = "flex items-center justify-between">
                                    <div className = "flex gap-8">
                                        <div className = "relative w-32 h-32 bg-gray-50 rounded-lg overflow-hidden">
                                            <Image src = {item.images[item.selectedColor]} alt = {item.name} fill className = "object-contain" />
                                        </div>
                                        <div className = "flex flex-col justify-between">
                                            <div className = "flex flex-col gap-2">
                                                <p className = "text-sm font-medium">
                                                    {item.name}
                                                </p>
                                                <p className = "text-xs text-gray-500">
                                                    Cantidad: {item.quantity}
                                                </p>
                                                <p className = "text-xs text-gray-500">
                                                    Talla: {item.selectedSize.toUpperCase()}
                                                </p>
                                                <p className = "text-xs text-gray-500">
                                                    Color: {item.selectedColor}
                                                </p>
                                            </div>
                                            <p className = "font-medium">
                                                S/. {item.price.toFixed(2)}
                                            </p>
                                        </div>
                                    </div>
                                    <button className = "flex items-center justify-center w-10 h-10 rounded-full bg-red-400 hover:bg-red-500 transition-all duration-300 text-red-100 cursor-pointer" onClick = {() => removeFromCart(item)}>
                                        <Trash2 className = "w-6 h-6" />
                                    </button>
                                </div>
                            ))
                        ) : activeStep === 2 ? <ShippingForm setShippingForm = {setShippingForm} /> : activeStep === 3 && shippingForm ? <PaymentForm /> : <p className = "text-sm text-gray-500">Por favor, complete el formulario de envío para continuar.</p>
                    }
                </div>
                <div className = "flex flex-col gap-8 w-full lg:w-5/12 shadow-lg border-1 border-gray-100 p-8 rounded-lg h-max">
                    <h2 className = "font-semibold">
                        Detalles de compra
                    </h2>
                    <div className = "flex flex-col gap-4">
                        <div className = "flex justify-between text-sm">
                            <p className = "text-gray-500">
                                Subtotal
                            </p>
                            <p className = "font-medium">
                                S/. {cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
                            </p>
                        </div>
                        <div className = "flex justify-between text-sm">
                            <p className = "text-gray-500">
                                Descuento (10%)
                            </p>
                            <p className = "font-medium">
                                S/. 10
                            </p>
                        </div>
                        <div className = "flex justify-between text-sm">
                            <p className = "text-gray-500">
                                Tarifa de envío
                            </p>
                            <p className = "font-medium">
                                S/. 10
                            </p>
                        </div>
                        <hr className = "border-gray-200" />
                        <div className = "flex justify-between">
                            <p className = "text-gray-800 font-semibold">
                                Total
                            </p>
                            <p className = "font-medium">
                                S/. {cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
                            </p>
                        </div>
                    </div>
                    {
                        activeStep === 1 && (
                            <button className = "flex items-center justify-center gap-2 w-full bg-gray-700 hover:bg-gray-800 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer" onClick = {() => router.push("/cart?step=2", { scroll: false })}>
                                Continuar
                                <ArrowRight className = "w-3 h-3" />
                            </button>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default CartPage;