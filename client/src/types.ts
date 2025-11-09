import { LucideIcon } from "lucide-react";
import { z } from "zod";

export type ProductType = {
    id: string | number;
    name: string;
    shortDescription: string;
    description: string;
    price: number;
    sizes: string[];
    colors: string[];
    images: Record<string, string>;
}

export type ProductsType = ProductType[];

export type CategoryType = {
    name: string;
    icon: LucideIcon;
    slug: string;
}

export type CategoriesType = CategoryType[];

export type CartItemType = ProductType & {
    quantity: number,
    selectedSize: string,
    selectedColor: string,
}

export type CartItemsType = CartItemType[];

export const shippingFormSchema = z.object({
    name: z.string().min(1, "El nombre es obligatorio").min(3, "El nombre debe tener al menos 3 caracteres").max(100, "El nombre es demasiado largo").regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, "El nombre solo puede contener letras"),
    email: z .string().min(1, "El correo es obligatorio").email("Ingresa un correo válido").toLowerCase(),
    phone: z.string().min(1, "El teléfono es obligatorio").regex(/^9\d{8}$/, "Ingresa un número válido de 9 dígitos que inicie con 9").length(9, "El número debe tener exactamente 9 dígitos"),
    address: z.string().min(1, "La dirección es obligatoria").min(10, "La dirección debe ser más específica").max(200, "La dirección es demasiado larga"),
    city: z.string().min(1, "La ciudad es obligatoria").min(3, "El nombre de la ciudad es muy corto").max(50, "El nombre de la ciudad es demasiado largo"),
});

export type ShippingFormData = z.infer<typeof shippingFormSchema>;

export const paymentFormSchema = z.object({
    cardHolder: z.string().min(1, "El nombre del titular es obligatorio").min(3, "El nombre debe tener al menos 3 caracteres").max(100, "El nombre es demasiado largo").regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, "El nombre solo puede contener letras").trim(),
    cardNumber: z.string().min(1, "El número de tarjeta es obligatorio").transform((val) => val.replace(/\s/g, "")).pipe(
        z.string()
            .length(16, "El número de tarjeta debe tener 16 dígitos")
            .regex(/^\d{16}$/, "Solo números permitidos")
            .refine((val) => {
                // Algoritmo de Luhn para validar números de tarjeta
                let sum = 0;
                let isEven = false;
                for (let i = val.length - 1; i >= 0; i--) {
                    let digit = parseInt(val[i]);
                    if (isEven) {
                        digit *= 2;
                        if (digit > 9) digit -= 9;
                    }
                    sum += digit;
                    isEven = !isEven;
                }
                return sum % 10 === 0;
            }, "Número de tarjeta inválido")
    ),
    expirationDate: z.string().min(1, "La fecha de expiración es obligatoria").regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Formato inválido. Usa MM/AA").refine((val) => { const [month, year] = val.split("/"); const expDate = new Date(2000 + parseInt(year), parseInt(month) - 1); const today = new Date(); return expDate > today; }, "La tarjeta está vencida"),
    cvv: z.string().min(1, "El CVV es obligatorio").regex(/^\d{3,4}$/, "El CVV debe tener 3 o 4 dígitos").min(3, "El CVV debe tener al menos 3 dígitos").max(4, "El CVV debe tener máximo 4 dígitos"),
});

export type PaymentFormData = z.infer<typeof paymentFormSchema>;

export type CartStoreStateType = {
    cart: CartItemsType;
    hasHydrated: boolean;
}

export type CartStoreActionsType = {
    addToCart: (product: CartItemType) => void;
    removeFromCart: (product: CartItemType) => void;
    clearCart: () => void;
}