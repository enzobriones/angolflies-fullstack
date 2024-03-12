import { ProductCard } from "@/components/products/product-card";
import { ProductPagination } from "@/components/products/product-pagination";
import { TbFishHook } from "react-icons/tb"

export default function ProductsPage() {
  return (
    <div className="flex mt-2 mx-3 items-center max-sm:justify-center">
      <div className="flex-col justify-center items-center w-full">
        <div className="flex-col max-sm:text-center w-full p-3">
          <h1 className="font-extrabold text-xl flex items-center gap-x-2 justify-center">Productos <TbFishHook size={25}/></h1>
          <h1 className="text-muted-foreground text-center">Moscas atadas a mano</h1>
          <hr className="mt-2"/>
        </div>
        <div className="flex items-center my-3 mx-10">
          
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 w-full sm:px-20 transition-all mt-2 mb-5">
          <ProductCard title="Ninfa seca" image="/img/image-1.jpg" price={1000}/>
          <ProductCard title="Adams" image="/img/image-2.jpg" price={1000}/>
          <ProductCard title="Brown caddis" image="/img/image-3.jpg" price={1000}/>
          <ProductCard title="Caddis green" image="/img/image-4.jpg" price={1000}/>
          <ProductCard title="Castellana roja" image="/img/image-5.jpg" price={1000}/>
          <ProductCard title="Cooper John Red" image="/img/image-6.jpg" price={1000}/>
          <ProductCard title="Elk hair Caddis black" image="/img/image-7.jpg" price={1000}/>

        </div>
        <ProductPagination />
      </div>
    </div>
  );
}