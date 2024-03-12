"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import "./styles.css";
import Image from "next/image";

interface Image {
  id: number;
  src: string;
}

interface Props {
  images: Image[];
  title: string;
  className?: string;
}

export const ProductSlideShow = ({ images, title, className }: Props) => {

  return (
    <div className={className}>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        } as React.CSSProperties
        }
        spaceBetween={10}
        navigation={true}
        autoplay={{
          delay: 2500,
        }}
        modules={[FreeMode, Navigation, Autoplay]}
        className="mySwiper2"
        autoHeight
      >
        {
          images.map(image => (
            <SwiperSlide key={image.id} >
              <Image 
                width={1024}
                height={800}
                src={image.src}
                alt={ title }
                className="rounded-lg object-cover"
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}
