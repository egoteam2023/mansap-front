import { IProduct } from './types'

function ProductCard({ product }: { product: IProduct }) {
  return (
    <div
      className="relative bg-white w-custom200 h-custom200 group"
      style={{
        background: `url(${product.image}) center center/cover no-repeat`,
      }}
    >
      <div className="absolute inset-0 felx items-center justify-end p-5 bg-black/50 flex flex-col gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className='text-white'>{product.title}</p>
      </div>
    </div>
  )
}

export default ProductCard
