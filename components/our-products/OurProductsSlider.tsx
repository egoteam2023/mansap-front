'use client'
import Slider from 'react-slick'
import ProductCard from './ProductCard'
import { IProduct } from './types'
import productList from './data.json'

function OurProductsSlider() {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Slider className="mt-10" {...settings}>
      {(productList as IProduct[]).map((el, idx) => (
        <div
          key={`productSlide${el.id}`}
          className={`flex justify-center duration-300`}
        >
          <ProductCard product={el} />
        </div>
      ))}
    </Slider>
  )
}

export default OurProductsSlider
