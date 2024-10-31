'use client'
import Slider from 'react-slick'
import galleryList from './data.json'
import { IGallery } from '../../type'
import GalleryCard from './GalleryCard'
import { useRef } from 'react'

function Gallery() {
  const ref = useRef<boolean>(true)

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3.4,
    slidesToScroll: 3.4,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <section>
      <div className="slider-container relative overflow-hidden mt-20">
        <h2 className="pl-8 text-xl text-white font-bold">Галерея</h2>
        <Slider className="mt-10" {...settings}>
          {(galleryList as IGallery[]).map((el, idx) => (
            <div
              key={`gallery_${el.id}`}
              className={`gallery-item duration-300 ${ref.current && idx === 0 ? 'pl-8' : 'pl-4'}`}
            >
              <GalleryCard gallery={el} idx={idx} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Gallery
