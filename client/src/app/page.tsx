import Image from "next/image";
import ProductList from "@/components/ProductList";

const Homepage = async ({ searchParams }: { searchParams: Promise<{ category: string }> }) => {
  const category = (await searchParams).category;

  return (
    <div className = "px-10 lg:px-24 pt-6">
      <div className = "relative aspect-[3/1] mb-12">
        <Image src = "/featured.png" alt = "Producto destacado" fill />
      </div>
      <ProductList category = {category} params = "homepage" />
    </div>
  )
}

export default Homepage;