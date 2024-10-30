'use client'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import React, { useRef } from 'react'
import Slider from 'react-slick'
import type { IService } from './type'
import data from './data.json'
import ServiceSlider from './Slider'
import leftIcon from '@/assets/arrowLeft.svg'
import rightIcon from '@/assets/arrowRight.svg'
import Image from 'next/image'

function Services() {
  let sliderRef = useRef<Slider | null>(null)
  const next = () => {
    sliderRef.current?.slickNext()
  }
  const previous = () => {
    sliderRef.current?.slickPrev()
  }
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="slider-container relative overflow-hidden">
      <Slider
        ref={(slider) => {
          sliderRef.current = slider
        }}
        {...settings}
      >
        {(data as IService[]).map((service) => (
          <ServiceSlider key={service.id} service={service} />
        ))}
      </Slider>
      <div
        style={{
          textAlign: 'center',
          position: 'absolute',
          bottom: '40px',
          right: '60px',
          display: 'flex',
          gap: '20px',
        }}
      >
        <button
          className="button  bg-slate-300 flex items-center justify-center p-3 duration-300 hover:bg-yellow"
          onClick={previous}
        >
          <Image src={rightIcon} alt="prev" width={30} height={30} />
        </button>
        <button
          className="button  bg-slate-300 flex items-center justify-center p-3 duration-300 hover:bg-yellow"
          onClick={next}
        >
          <Image src={leftIcon} alt="next" width={30} height={30} />
        </button>
      </div>
    </div>
  )
}

export default Services
