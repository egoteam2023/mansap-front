'use client'
import Slider from 'react-slick'
import galleryList from './data.json'
import { IGallery } from './type'
import GalleryCard from './GalleryCard'
import { useRef } from 'react'
import SectionTitle from '../ui/section-title'

function Gallery() {
  const ref = useRef<boolean>(true)

  const settings = {
    infinite: true,
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 2,
    initialSlide: 0,
    afterChange: (current: number) => (ref.current = current === 0),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.8,
          slidesToScroll: 2.8,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 1.8,
          initialSlide: 1.8,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <section>
      <div className="slider-container relative overflow-hidden">
        <SectionTitle title="Галерея" />
        <Slider className="mt-10" {...settings}>
          {(galleryList as IGallery[]).map((el, idx) => (
            <div
              key={`gallery_${el.id}`}
              className={`gallery-item duration-300 ${ref.current && idx === 0 ? 'pl-8' : 'pl-4'}`}
            >
              <GalleryCard gallery={el} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Gallery
