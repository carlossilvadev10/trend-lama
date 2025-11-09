import { CategoryType } from "@/types";
import { Footprints, Glasses, Briefcase, Shirt, ShoppingBasket, Hand, Venus, LucideIcon } from "lucide-react";

export const categories: CategoryType[] = [
    {
        name: "Todos",
        icon: ShoppingBasket,
        slug: "todos"
    },
    {
        name: "Camisetas",
        icon: Shirt,
        slug: "camisetas"
    },
    {
        name: "Zapatos",
        icon: Footprints,
        slug: "zapatos"
    },
    {
        name: "Accesorios",
        icon: Glasses,
        slug: "accesorios"
    },
    {
        name: "Bolsos",
        icon: Briefcase,
        slug: "bolsos"
    },
    {
        name: "Vestidos",
        icon: Venus,
        slug: "vestidos"
    },
    {
        name: "Chaquetas",
        icon: Shirt,
        slug: "chaquetas"
    },
    {
        name: "Guantes",
        icon: Hand,
        slug: "guantes"
    },
];