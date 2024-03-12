import Link from "next/link";
import Image from "next/image";
import { TbShoppingBagPlus } from "react-icons/tb";

import { Button } from "@/components/ui/button";

interface Props {
  title: string;
  price: number;
  image: string;
}

export const ProductCard = ({ title, price, image }: Props) => {
  return (
    <div className="flex justify-center w-full my-2 mx-2">
      <div className="flex-col border dark:border-gray-700 p-2.5 rounded-md text-center">
        <div className="absolute z-10 m-3">
          <Button>
            <TbShoppingBagPlus size={20} />
          </Button>
        </div>
        <Link href="">
          <Image
            src={ image }
            alt="fly"
            width={400}
            height={400}
            className="object-cover rounded-lg relative min-w-full shadow-md"
          />
        </Link>
        <Link href="">
          <h1 className="mt-2 mx-3 hover:text-lime-600 text-lg">
            { title }
          </h1>
        </Link>
        <h3 className="mt-1 font-extrabold mx-3">${ price }</h3>
        <div className="flex items-center justify-center gap-x-2">
          <Button variant="outline" size="sm" className="my-3">
            Ver más
          </Button>
          <Button variant="default" size="sm" className="my-3 gap-x-2">
            Agregar <TbShoppingBagPlus />
          </Button>
        </div>
      </div>
    </div>
  )
}
