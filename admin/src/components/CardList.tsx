import Image from "next/image";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const popularProducts = [
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
];

const latestTransactions = [
  {
    id: 1,
    title: "Pago de pedidos",
    badge: "John Doe",
    image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1400,
  },
  {
    id: 2,
    title: "Pago de pedidos",
    badge: "Jane Smith",
    image: "https://images.pexels.com/photos/4969918/pexels-photo-4969918.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2100,
  },
  {
    id: 3,
    title: "Pago de pedidos",
    badge: "Michael Johnson",
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1300,
  },
  {
    id: 4,
    title: "Pago de pedidos",
    badge: "Lily Adams",
    image: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 2500,
  },
  {
    id: 5,
    title: "Pago de pedidos",
    badge: "Sam Brown",
    image: "https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&w=800",
    count: 1400,
  },
];

const CardList = ({ title }: { title: string }) => {
  return (
    <div className = "">
      <h1 className = "text-lg font-medium mb-6">{title}</h1>
      <div className = "flex flex-col gap-2">
        {
          title === "Productos populares" ? popularProducts.map((item) => (
            <Card key = {item.id} className = "flex-row items-center justify-between gap-4 p-4">
              <div className = "w-12 h-12 rounded-sm relative overflow-hidden">
                <Image src = {Object.values(item.images)[0] || ""} alt = {item.name} fill className = "object-cover" />
              </div>
              <CardContent className = "flex-1 p-0">
                <CardTitle className = "text-sm font-medium">{item.name}</CardTitle>
              </CardContent>
              <CardFooter className = "p-0">S/. {item.price}K</CardFooter>
            </Card>
          )) : latestTransactions.map((item) => (
            <Card key = {item.id} className = "flex-row items-center justify-between gap-4 p-4">
              <div className = "w-12 h-12 rounded-sm relative overflow-hidden">
                <Image src = {item.image} alt = {item.title} fill className = "object-cover" />
              </div>
              <CardContent className = "flex-1 p-0">
                <CardTitle className = "text-sm font-medium">{item.title}</CardTitle>
                <Badge variant = "secondary">{item.badge}</Badge>
              </CardContent>
              <CardFooter className = "p-0">S/. {item.count / 1000}K</CardFooter>
            </Card>
          ))
        }
      </div>
    </div>
  );
};

export default CardList;