import { ProductsType } from "@/types";

export const products: ProductsType = [
    {
        id: 1,
        name: "Adidas CoreFit T-Shirt",
        shortDescription: "Camiseta deportiva ligera y transpirable, perfecta para entrenamientos intensos.",
        description: "La Adidas CoreFit T-Shirt combina tecnología de ventilación avanzada con un diseño moderno. Su tejido DryLite mantiene tu cuerpo fresco incluso durante los entrenamientos más exigentes. Ideal para quienes buscan comodidad y rendimiento sin sacrificar estilo.",
        price: 39.9,
        sizes: ["s", "m", "l", "xl", "xxl"],
        colors: ["gray", "purple", "green"],
        images: {
            gray: "/products/1g.png",
            purple: "/products/1p.png",
            green: "/products/1gr.png",
        },
    },
    {
        id: 2,
        name: "Puma Ultra Warm Zip",
        shortDescription: "Chaqueta con cierre frontal y aislamiento térmico para climas fríos.",
        description: "La Puma Ultra Warm Zip ofrece una sensación de abrigo superior gracias a su tecnología HeatLock. Su interior afelpado retiene el calor corporal, mientras que el exterior impermeable protege del viento y la lluvia ligera. Ideal para tus entrenamientos o salidas al aire libre.",
        price: 59.9,
        sizes: ["s", "m", "l", "xl"],
        colors: ["gray", "green"],
        images: {
            gray: "/products/2g.png",
            green: "/products/2gr.png"
        },
    },
    {
        id: 3,
        name: "Nike Air Essentials Pullover",
        shortDescription: "Sudadera suave con corte clásico y tejido premium de algodón.",
        description: "El Nike Air Essentials Pullover combina comodidad y estilo urbano. Confeccionado con algodón peinado y una textura suave al tacto, brinda calidez sin sobrepeso. Su ajuste holgado permite libertad de movimiento, ideal para el día a día o el gimnasio.",
        price: 69.9,
        sizes: ["s", "m", "l"],
        colors: ["green", "blue", "black"],
        images: {
            green: "/products/3gr.png",
            blue: "/products/3b.png",
            black: "/products/3bl.png",
        },
    },
    {
        id: 4,
        name: "Nike Dri Flex T-Shirt",
        shortDescription: "Camiseta ligera con tecnología Dri-FIT para mantenerte seco y cómodo.",
        description: "Diseñada para entrenamientos de alto rendimiento, la Nike Dri Flex T-Shirt absorbe el sudor rápidamente y permite una ventilación constante. Su tejido elástico se adapta al cuerpo, brindando libertad de movimiento en cada rutina.",
        price: 29.9,
        sizes: ["s", "m", "l"],
        colors: ["white", "pink"],
        images: {
            white: "/products/4w.png",
            pink: "/products/4p.png"
        },
    },
    {
        id: 5,
        name: "Under Armour StormFleece",
        shortDescription: "Chompa térmica resistente al viento con interior de forro suave.",
        description: "La Under Armour StormFleece es perfecta para quienes buscan confort y protección en exteriores. Su tejido repelente al agua y su interior cálido hacen que sea ideal para actividades al aire libre. Un equilibrio perfecto entre rendimiento y estilo moderno.",
        price: 49.9,
        sizes: ["s", "m", "l"],
        colors: ["red", "orange", "black"],
        images: {
            red: "/products/5r.png",
            orange: "/products/5o.png",
            black: "/products/5bl.png",
        },
    },
    {
        id: 6,
        name: "Nike Air Max 270",
        shortDescription: "Zapatillas con amortiguación Air Max para máxima comodidad y estilo urbano.",
        description: "Las Nike Air Max 270 fusionan diseño moderno con confort superior. Su unidad Air visible ofrece una pisada suave, mientras que el tejido de malla transpirable mantiene tus pies frescos. Perfectas para uso diario o entrenamientos ligeros.",
        price: 59.9,
        sizes: ["40", "42", "43", "44"],
        colors: ["gray", "white"],
        images: {
            gray: "/products/6g.png",
            white: "/products/6w.png"
        },
    },
    {
        id: 7,
        name: "Nike Ultraboost Pulse",
        shortDescription: "Zapatillas de alto rendimiento con suela Boost y diseño ergonómico.",
        description: "La Nike Ultraboost Pulse ofrece una experiencia de carrera suave y reactiva. Su tecnología Boost devuelve energía a cada paso, mientras que su estructura flexible se ajusta al pie para un soporte total. Ideal tanto para corredores como para quienes buscan estilo deportivo.",
        price: 69.9,
        sizes: ["40", "42", "43"],
        colors: ["gray", "pink"],
        images: {
            gray: "/products/7g.png",
            pink: "/products/7p.png"
        },
    },
    {
        id: 8,
        name: "Levi’s Classic Denim",
        shortDescription: "Jeans de corte clásico con mezclilla resistente y acabado moderno.",
        description: "Los Levi’s Classic Denim son un ícono del estilo casual. Fabricados con denim de alta calidad, brindan durabilidad y comodidad en cada uso. Su diseño versátil combina fácilmente con cualquier prenda, manteniendo la esencia atemporal de Levi’s.",
        price: 59.9,
        sizes: ["s", "m", "l"],
        colors: ["blue", "green"],
        images: {
            blue: "/products/8b.png",
            green: "/products/8gr.png"
        },
    },
];