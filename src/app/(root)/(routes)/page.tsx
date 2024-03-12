"use client";

import { motion } from "framer-motion";

import { ProductSlideShow } from "@/components/swiper/product-slideshow";
import { imagesArray } from "@/data/images";
import { logoFont } from "@/config/fonts";


export default function Home() {
  return (
    <div className="flex w-full justify-center items-center mt-5 p-3">
      <div className="flex-col items-center justify-center p-3">
        <div className="flex gap-x-2 max-sm:text-center justify-center items-center">
          <h1 className="text-4xl font-extrabold text-center">¡Bienvenid@ a <span className={`${logoFont.className}`}>Angolflies</span>!</h1>
        </div>
        <motion.h3
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.8
          }}
          className="text-center text-muted-foreground my-2"
        >
          Aquí encontrarás las mejores moscas atadas a mano y con una calidad inigualable.
        </motion.h3>
        <motion.div
          className="flex-col justify-center my-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.5
          }}
        >
          <ProductSlideShow
            images={imagesArray}
            title="Fotos de productos"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.8
          }}
          className="mt-5 sm:mx-36 md:mx-52 lg:mx-72"
        >
          <h1 className="text-center font-extrabold text-2xl mt-5">¿Qué es <span className={`${logoFont.className}`}>AngolFlies</span>?</h1>
          <p className="text-center text-muted-foreground mt-2 font-light">AngolFlies es una tienda de moscas de pesca, atadas a mano con los mejores materiales y con una calidad inigualable. Nuestro objetivo es que puedas disfrutar de la pesca con mosca de la mejor manera posible, con moscas de calidad y a un precio accesible.</p>
        </motion.div>
        
      </div>
    </div>
  );
}
