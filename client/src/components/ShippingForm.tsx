import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ShippingFormData, shippingFormSchema } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

interface ShippingFormProps {
    setShippingForm: (data: ShippingFormData) => void;
}

const ShippingForm = ({ setShippingForm }: ShippingFormProps) => {
    const {register, handleSubmit, formState: { errors }} = useForm<ShippingFormData>({
        resolver: zodResolver(shippingFormSchema),
    });

    const router = useRouter();

    const handleShippingForm: SubmitHandler<ShippingFormData> = (data) => {
        setShippingForm(data);
        router.push("/cart?step=3", { scroll: false });
    }

    return (
        <form className = "flex flex-col gap-4" onSubmit = {handleSubmit(handleShippingForm)}>
            <div className = "flex flex-col gap-2">
                <label htmlFor = "name" className = "text-xs text-gray-500 font-medium">Nombre*</label>
                <input type = "text" id = "name" placeholder = "John Doe" {...register("name")} className = "border-b border-gray-200 py-2 outline-none text-sm" />
                {
                    errors.name && <p className = "text-xs text-red-500">{errors.name.message}</p>
                }
            </div>
            <div className = "flex flex-col gap-2">
                <label htmlFor = "email" className = "text-xs text-gray-500 font-medium">Email*</label>
                <input type = "email" id = "email" placeholder = "johndoe@gmail.com" {...register("email")} className = "border-b border-gray-200 py-2 outline-none text-sm" />
                {
                    errors.email && <p className = "text-xs text-red-500">{errors.email.message}</p>
                }
            </div>
            <div className = "flex flex-col gap-2">
                <label htmlFor = "phone" className = "text-xs text-gray-500 font-medium">Celular*</label>
                <input type = "tel" id = "phone" placeholder = "987654321" {...register("phone")} className = "border-b border-gray-200 py-2 outline-none text-sm" />
                {
                    errors.phone && <p className = "text-xs text-red-500">{errors.phone.message}</p>
                }
            </div>
            <div className = "flex flex-col gap-2">
                <label htmlFor = "address" className = "text-xs text-gray-500 font-medium">Dirección*</label>
                <input type = "text" id = "address" placeholder = "Av. San Pedro 235" {...register("address")} className = "border-b border-gray-200 py-2 outline-none text-sm" />
                {
                    errors.address && <p className = "text-xs text-red-500">{errors.address.message}</p>
                }
            </div>
            <div className = "flex flex-col gap-2">
                <label htmlFor = "city" className = "text-xs text-gray-500 font-medium">Ciudad*</label>
                <input type = "text" id = "city" placeholder = "Lima" {...register("city")} className = "border-b border-gray-200 py-2 outline-none text-sm" />
                {
                    errors.city && <p className = "text-xs text-red-500">{errors.city.message}</p>
                }
            </div>
            <button type = "submit" className = "flex items-center justify-center gap-2 w-full bg-gray-700 hover:bg-gray-800 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer">
                Continuar
                <ArrowRight className = "w-3 h-3" />
            </button>
        </form>
    )
}

export default ShippingForm;