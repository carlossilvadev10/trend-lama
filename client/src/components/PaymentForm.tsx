import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { PaymentFormData, paymentFormSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const PaymentForm = () => {
    const {register, handleSubmit, formState: { errors }} = useForm<PaymentFormData>({
        resolver: zodResolver(paymentFormSchema),
    });

    const router = useRouter();

    const handlePaymentForm: SubmitHandler<PaymentFormData> = () => {}

    return (
        <form className = "flex flex-col gap-4" onSubmit = {handleSubmit(handlePaymentForm)}>
            <div className = "flex flex-col gap-2">
                <label htmlFor = "cardHolder" className = "text-xs text-gray-500 font-medium">Nombre en la tarjeta*</label>
                <input type = "text" id = "cardHolder" placeholder = "John Doe" {...register("cardHolder")} className = "border-b border-gray-200 py-2 outline-none text-sm" />
                {
                    errors.cardHolder && <p className = "text-xs text-red-500">{errors.cardHolder.message}</p>
                }
            </div>
            <div className = "flex flex-col gap-2">
                <label htmlFor = "cardNumber" className = "text-xs text-gray-500 font-medium">Número de tarjeta*</label>
                <input type = "text" id = "cardNumber" placeholder = "1234 5678 9012 3456" maxLength = {19} {...register("cardNumber")} className = "border-b border-gray-200 py-2 outline-none text-sm"  onChange = {(e) => { let value = e.target.value.replace(/\D/g, ''); value = value.replace(/(\d{4})(?=\d)/g, '$1 '); e.target.value = value; }} />
                {
                    errors.cardNumber && <p className = "text-xs text-red-500">{errors.cardNumber.message}</p>
                }
            </div>
            <div className = "flex flex-col gap-2">
                <label htmlFor = "expirationDate" className = "text-xs text-gray-500 font-medium">Fecha de vencimiento*</label>
                <input type = "text" id = "expirationDate" placeholder = "MM/AA" {...register("expirationDate")} className = "border-b border-gray-200 py-2 outline-none text-sm" />
                {
                    errors.expirationDate && <p className = "text-xs text-red-500">{errors.expirationDate.message}</p>
                }
            </div>
            <div className = "flex flex-col gap-2">
                <label htmlFor = "cvv" className = "text-xs text-gray-500 font-medium">CVC/CVV*</label>
                <input type = "text" id = "cvv" placeholder = "CVC/CVV" {...register("cvv")} className = "border-b border-gray-200 py-2 outline-none text-sm" />
                {
                    errors.cvv && <p className = "text-xs text-red-500">{errors.cvv.message}</p>
                }
            </div>
            <div className = "flex items-center gap-2 my-2">
                <Image src = "/klarna.png" alt = "klarna" width = {50} height = {25} className = "rounded-md" />
                <Image src = "/cards.png" alt = "cards" width = {50} height = {25} className = "rounded-md" />
                <Image src = "/stripe.png" alt = "stripe" width = {50} height = {25} className = "rounded-md" />
            </div>
            <button type = "submit" className = "flex items-center justify-center gap-2 w-full bg-gray-700 hover:bg-gray-800 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer">
                Pagar
                <ShoppingCart className = "w-3 h-3" />
            </button>
        </form>
    )
}

export default PaymentForm;