import productList from './data.json'
import OurProductsSlider from './OurProductsSlider'
import ProductCard from './ProductCard'
import { IProduct } from './types'

function OurProducts() {
  return (
    <section className="container mt-20">
      <h2 className="font-bold text-center text-5xl text-white">
        Наши объекты
      </h2>
      <div className="hidden sm:grid mt-10  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 place-items-center">
        {(productList as IProduct[]).map((el, idx) => (
          <ProductCard key={`product_${idx}`} product={el} />
        ))}
      </div>
      <div className='sm:hidden'>
        <OurProductsSlider/>
      </div>
    </section>
  )
}

export default OurProducts
