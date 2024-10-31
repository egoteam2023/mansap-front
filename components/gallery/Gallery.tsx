'use client'
import React from 'react'
import 'swiper/swiper-bundle.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import GalleryCard from './GalleryCard'
import Image from '@/assets/Mask group-1.png'

const mockData = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]

export function Gallery() {
  return (
    <section className="">
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        className=""
      >
        {mockData.map((item, i) => (
          <SwiperSlide>
            <GalleryCard imageUrl={Image} number={i + 1} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
